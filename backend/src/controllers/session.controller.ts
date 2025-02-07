import {AppDataSource} from "../database";
import {Session} from "../model/Session";
import {Request, Response} from 'express'
import {User} from "../model/Users";
import useUserDB from "../localDB/tempStorage";
import {random} from "lodash";
import {iTempUserStore} from "../types";
import {sendVerificationEmail} from "../utils/EmailServices";

export class sessionController {
  private sessionRepository = AppDataSource.getRepository(Session);
  
  async createSession(req: Request, res: Response) {
    try {
      const {sessionDate: date, sessionTime: time, purpose, otherInfo} = req.body;
      
      const id = req.user?.id;
      
      if (id) {
        const user = await User.findOneBy({id});
        const newSession = this.sessionRepository.create({date, time, purpose, otherInfo, user})
        await this.sessionRepository.save(newSession)
        return res.status(201).json({sessionId: newSession.id});
      } else {
        const {firstName, lastName, phone, email} = req.body;
        const otp = `${random(100000, 999999)}`
        const unRegisteredUser: iTempUserStore = {
          otp,
          date,
          time,
          purpose,
          otherInfo,
          firstName,
          lastName,
          phone,
          email,
          path: "session"
        }
        useUserDB.createUser(unRegisteredUser)
        sendVerificationEmail(email, lastName, otp)
        return res.status(200).json({sessionId: 'create-account'});
      }
      
    } catch (error) {
      return res.status(500).json({error: error.message});
      
    }
  }
  
  async getSessionByUserId(req: Request, res: Response) {
    try {
      // const {user_id} = req.params;
      const id = req.user?.id
      const user_id = id
      
      console.log("Fetching reservations for user:", user_id);
      
      const session = await this.sessionRepository
        .createQueryBuilder("session")
        .leftJoinAndSelect("session.user", "user")
        .where("user.id = :id", {id: user_id})
        .getMany();
      
      if (!session.length) {
        return res.status(404).json({message: "No sessions found for this user"});
      }
      
      return res.json(session);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
  
  async getSessionById(req: Request, res: Response) {
    try {
      const {session_id} = req.params;
      
      console.log("Received ID:", session_id);
      
      const onesession = await this.sessionRepository
        .createQueryBuilder("session")
        .where("session.id = :id", {id: session_id})
        .getOne();
      
      if (!onesession) {
        return res.status(404).json({message: "Session not found"});
      }
      
      return res.json(onesession);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
  
  async getAllSession(req: Request, res: Response) {
    const allSession = await this.sessionRepository.find()
    return res.json(allSession);
  }
  
  
}