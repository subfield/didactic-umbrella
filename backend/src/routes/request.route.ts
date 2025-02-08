import express from 'express'
import { RequestController } from '../controllers/request-service.controller'
import { getFilteredReservation } from '../controllers/filterReservation.controller';
import authenticateToken from "../middleware/auth.middleware";

const requestRouter = express.Router();
const controller = new RequestController()

requestRouter.post('/requestService', controller.createRequestService.bind(controller))
export default requestRouter;
