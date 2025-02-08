import { AppDataSource } from "../database";
import { RequestService } from "../model/RequestService";
import {Request, Response} from 'express'
import {random} from "lodash";
import {iTempUserStore} from "../types";
import useUserDB from "../localDB/tempStorage";
import {expirationDate, LIVE_SITE, MODE} from "./auth.controller";
export class RequestController {
    private requestServiceRepository = AppDataSource.getRepository(RequestService)
    async createRequestService(req: Request, res: Response) {
        try {
            const {
              service,
              serviceType,
              businessName,
              businessIndustry,
              businessEmail,
              businessLocation,
              businessBrief,
              whyApply,
              otherInfo,
              paymentType,
              paymentPlan,
              internal
            } = req.body;
          //   service,
          //     serviceType,
          //     firstName,
          //     lastName,
          //     phone,
          //     email,
          //     businessName,
          //     businessIndustry,
          //     businessEmail,
          //     businessLocation,
          //     businessBrief,
          //     whyApply,
          //     otherInfo,
          //     paymentType,
          //     paymentPlan
          // }
            
          const id = req.user?.id;
          
          if (id) {
            const user = await RequestService.findOneBy({id});
            // if (!user) {
            //   return res.status(400).json({message: "User does not exist"});
            //
            // }
            // const userExists = await this.requestServiceRepository.findOneBy({user: {id: user.id}})
            // if (userExists) return res.status(400).json({message: "User Exists"})
            
            const newRequest = this.requestServiceRepository.create({
              service,
              serviceType,
              businessName,
              businessIndustry,
              businessEmail,
              businessLocation,
              businessBrief,
              whyApply,
              otherInfo,
              paymentType,
              paymentPlan,
              user
            })
            await this.requestServiceRepository.save(newRequest)
            
            if(internal === 'yes') {
              // return 0
            } else {
            return res.status(201).json({requestId: newRequest.id});
            }
          } else {
            const {firstName, lastName, phone, email} = req.body;
            const otp = `${random(100000, 999999)}`
            const unRegisteredUser: iTempUserStore = {
              otp,
              service,
              serviceType,
              businessName,
              businessIndustry,
              businessEmail,
              businessLocation,
              businessBrief,
              whyApply,
              otherInfo,
              paymentType,
              paymentPlan,
              firstName,
              lastName,
              phone,
              email,
              path: "request"
            }
            useUserDB.createUser(unRegisteredUser)
            // sendVerificationEmail(email, lastName, otp)
            const maxAge = MODE === "prod" ? expirationDate : 45 * 60 * 1000;
            
            let domain;
            
            if (MODE === "dev") {
              domain = "localhost";
            } else {
              domain = LIVE_SITE;
            }
            
            res.cookie("tempEmail", email, {
              httpOnly: true,
              secure: MODE === "prod",
              sameSite: MODE === "prod" ? "none" : "lax",
              maxAge,
              domain: `${domain}`,
            });
            if(internal === 'yes') {
              // return 0
            } else {
              return res.status(200).json({requestId: 'create-account'});
            }
          }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getAllRequestService(req: Request, res: Response){
        const allReservation = await this.requestServiceRepository.find()
        return res.json(allReservation);
     }
}