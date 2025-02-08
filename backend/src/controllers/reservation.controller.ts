import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { Reservation } from "../model/Reservation";
import { User } from "../model/Users";
import {random} from "lodash";
import {iTempUserStore} from "../types";
import useUserDB from "../localDB/tempStorage";
import {sendVerificationEmail} from "../utils/EmailServices";

export class reservationController{
    private reservationRespository = AppDataSource.getRepository(Reservation);
     async getAllReservation(req: Request, res: Response){
        const allReservation = await this.reservationRespository.find()
        return res.json(allReservation);
     }

     async getReservationByUserId(req: Request, res: Response) {
        try {
            const id = req.user?.id
            const user_id = id
            
            console.log("Fetching reservations for user:", user_id);
    
    
            const reservations = await this.reservationRespository
                .createQueryBuilder("reserve")
                .leftJoinAndSelect("reserve.user", "user") 
                .where("user.id = :id", { id: user_id }) 
                .getMany(); 
    
            if (!reservations.length) {
                return res.status(404).json({ message: "No reservations found for this user" });
            }
    
            return res.json(reservations);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    
  

     async getReservationById(req: Request, res: Response) {
      try {
          const { reserve_id } = req.params;
  
          console.log("Received ID:", reserve_id); 
  
          const oneReserve = await this.reservationRespository
              .createQueryBuilder("reserve")
              .where("reserve.id = :id", { id: reserve_id })
              .getOne();
  
          if (!oneReserve) {
              return res.status(404).json({ message: "Reservation not found" });
          }
  
          return res.json(oneReserve);
      } catch (error) {
          return res.status(500).json({ error: error.message });
      }
  }
  

     async createReservation(req: Request, res: Response) {
      try {
          const { shortlet, checkInDate, checkInTime, checkOutDate, otherInfo } = req.body;
          
        const id = req.user?.id;
        
        if (id) {
          const user = await User.findOneBy({id});
          const newReservation = this.reservationRespository.create({
            shortlet,
            checkInDate,
            checkInTime,
            checkOutDate,
            otherInfo,
            user
          })
          await this.reservationRespository.save(newReservation)
          return res.status(201).json({sessionId: newReservation.id});
        } else {
          const {firstName, lastName, phone, email} = req.body;
          const otp = `${random(100000, 999999)}`
          const unRegisteredUser: iTempUserStore = {
            otp,
            otherInfo,
            firstName,
            lastName,
            phone,
            email,
            checkInDate,
            checkInTime,
            checkOutDate,
            shortlet,
            path: "reservation"
          }
          useUserDB.createUser(unRegisteredUser)
          sendVerificationEmail(email, lastName, otp)
          return res.status(200).json({sessionId: 'create-account'});
        }
  
      } catch (error) {
          return res.status(500).json({ error: error.message });
      }
  }
  
} 