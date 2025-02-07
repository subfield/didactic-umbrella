import { AppDataSource } from "../database";
import { RequestService } from "../model/RequestService";
import {Request, Response} from 'express'
export class RequestController {
    private requestServiceRepository = AppDataSource.getRepository(RequestService)
    async createRequestService(req: Request, res: Response) {
        try {
            const { user_id } = req.params;
            const { service, serviceType, businessName, businessIndustry, businessEmail,businessLocation,businessBrief, whyApply,otherInfo} = req.body;
            const user = await RequestService.findOneBy({ id: user_id });
            if (!user) {
                return res.status(400).json({ message: "User does not exist" });

            }
            const userExists = await this.requestServiceRepository.findOneBy({ user: { id: user.id } })
            if (userExists) return res.status(400).json({ message: "User Exists" })
                
            const newSession = this.requestServiceRepository.create({ service, serviceType, businessName, businessIndustry, businessEmail,businessLocation,businessBrief, whyApply, otherInfo, user})
                await this.requestServiceRepository.save(newSession)
                return res.status(201).json(newSession);
        } catch (error) {
            return res.status(500).json({ error: error.message });

        }
    }

    async getAllRequestService(req: Request, res: Response){
        const allReservation = await this.requestServiceRepository.find()
        return res.json(allReservation);
     }
}