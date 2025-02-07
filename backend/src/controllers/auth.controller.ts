import {AppDataSource} from "../database";
import {User} from "../model/Users";
// import {v4 as uuidv4} from "uuid";
import {encryptPassword, isPasswordMatch, serverTime} from "../utils";
import jwt from "jsonwebtoken";
import {Request, Response} from 'express'
import {omit, random} from "lodash";
import useOTP from "../localDB/otp"
import useUserDB from "../localDB/tempStorage"
import {sendVerificationEmail} from "../utils/EmailServices";

import {sessionController} from "./session.controller";
import {reservationController} from "./reservation.controller";

const sessionCtrl = new sessionController();
const reservationCtrl = new reservationController();

const jwtSecret = process.env.JWT_SECRET as string;
const COOKIE_EXPIRATION_DAYS = 1; // cookie expiration in days
const expirationDate = COOKIE_EXPIRATION_DAYS * 24 * 60 * 60 * 1000

const MODE = process.env.MODE
const LIVE_SITE = process.env.LIVE_SITE

export class registerController {
  private registerRepository = AppDataSource.getRepository(User)
  
  async getAllUsers(req: Request, res: Response) {
    const allUsers = await this.registerRepository.find()
    return res.json(allUsers);
  }
  
async getUserById(req: Request, res: Response) {
  try {
    let id
    id = req.params.id;
    if(!id) {
    id = req.user?.id
    }
    const user_id = id

    if (!user_id) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const oneUser = await this.registerRepository.findOne({ where: { id: user_id } });

    if (!oneUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const safeUser = omit(oneUser, 'password', 'verificationToken')

    return res.json(safeUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

  
  async createUser(req: Request, res: Response) {
    try {
      const {firstName, lastName, email, phone, password} = req.body
      if (!firstName || !lastName || !email || !phone || !password)
        return res.status(400).json({message: "fields cannot be empty"})
      
      const userExists = await User.findOneBy({email})
      if (userExists) return res.status(400).json({message: "User Exists"})
      
      const token = `${random(100000, 999999)}`;
      const encryptedPassword = await encryptPassword(password);
      
      const newUser = this.registerRepository.create({
        firstName,
        lastName,
        email,
        phone,
        password: encryptedPassword,
        isEmailVerified: false,
        verificationToken: token
      })
      await this.registerRepository.save(newUser)
      
      // send verification email and save otp in localDB for verification
      useOTP.save(email, token)
      sendVerificationEmail(email, lastName, token)
      return res.status(201).json({
        message: "created successfully"});
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
  
  async createSendToken(user: User) {
    const {email, id} = user;
    return jwt.sign({email, id}, jwtSecret, {expiresIn: '1d'});
  }
  
  async verifyUser(req: Request, res: Response) {
    try {
      const {token, stage, password} = req.body;
      
      if (!stage) {
        return res.status(400).json({message: "Provide verification Stage"});
      }
      
      if (stage !== 'session') {
        if (!token) return res.status(400).json({message: "Invalid token"});
        
        const otp = token
        const otpRes = await useOTP.read(otp)
        const user = await this.registerRepository.findOneBy({email: otpRes.email})
        
        if (!user) {
          return res.status(400).json({message: "Invalid or expired token"});
        }
        
        if (serverTime().valueOf() > otpRes.expiresAt.valueOf()) {
          return res.status(400).json({message: "Token expired"});
        }
        
        if (user.isEmailVerified) {
          return res.status(400).json({message: "Email is already verified!"});
        }
        
        user.isEmailVerified = true;
        user.verificationToken = undefined;
        await user.save()
        
        useOTP.delete(user.email)
        return res.status(200).json({message: "Email successfully verified!"});
        
      } else {
        const {
          firstName,
          lastName,
          email,
          phone,
          path,
          date,
          time,
          purpose,
          expiresAt,
          shortlet,
          checkInDate,
          checkInTime,
          checkOutDate,
          otherInfo
        } = await useUserDB.read(token)
        
        if (serverTime().valueOf() > expiresAt.valueOf()) {
          return res.status(400).json({message: "Token expired"});
        }
        
        if (!password) {
          return res.status(400).json({message: "Provide a  password"});
        }
        
        const encryptedPassword = await encryptPassword(password);
        
        const newUser = this.registerRepository.create({
          firstName,
          lastName,
          email,
          phone,
          password: encryptedPassword,
          isEmailVerified: true,
          verificationToken: "sessionBased"
        })
        
        await this.registerRepository.save(newUser)
        
        if (path === 'session') {
          req.body = {sessionDate: date, sessionTime: time, purpose, otherInfo};
          sessionCtrl.createSession(req, res)
        } else {
          req.body = {shortlet, checkInDate, checkInTime, checkOutDate, otherInfo};
          reservationCtrl.createReservation(req, res)
        }
      }
    } catch (error) {
      console.error("Error verifying email:", error);
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
  
  async ResendToken(req: Request, res: Response) {
    try {
      const {email, stage, password} = req.body;
      
      if (!stage) {
        return res.status(400).json({message: "Provide verification Stage"});
      }
        const token = `${random(100000, 999999)}`;
      
      if (stage !== 'session') {
        const user = await this.registerRepository.findOneBy({email})
        
        if (!user) {
          return res.status(404).json({message: "User does not exists"});
        }
        
        await useOTP.save(email, token)
        sendVerificationEmail(email, user.lastName, token)
        
        return res.status(200).json({message: "Email resent successfully!"});
        
      }
    } catch (error) {
      console.error("Error verifying email:", error);
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
  
  async login(req: Request, res: Response) {
    try {
      const {email, password} = req.body;
      const user = await this.registerRepository.findOneBy({email});
      if (
        !user ||
        !(await isPasswordMatch(password, user.password as string))
      ) {
        return res.status(400).json({message: "Incorrect email or password"});
      }
      if (!user.isEmailVerified) {
        return res.status(400).json({message: "email is not verified"});
      }

      const safeUser = omit(user, 'password', 'verificationToken')
      
      const token = await this.createSendToken(user!)
      
      const maxAge = MODE === "prod" ? expirationDate : 45 * 60 * 1000;
      
      let domain;
      
      if (MODE === "dev") {
        domain = "localhost";
      } else {
        domain = LIVE_SITE;
      }
      
      res.cookie("token", token, {
        httpOnly: true,
        secure: MODE === "prod",
        sameSite: MODE === "prod" ? "none" : "lax",
        maxAge,
        domain: `${domain}`,
      });
      
      res.json({
        message: "User logged in successfully!",
        user: safeUser,
        status: 200,
      });
      return
    } catch (error) {
      res.json({
        message: error.message,
        status: 500,
      });
      return
    }
  }
}




