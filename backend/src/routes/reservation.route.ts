import express from 'express'
import { reservationController } from '../controllers/reservation.controller'
import { getFilteredReservation } from '../controllers/filterReservation.controller';
import authenticateToken from "../middleware/auth.middleware";

const reserveRouter = express.Router();
const controller = new reservationController()

reserveRouter.get('/reserves', controller.getAllReservation.bind(controller))
reserveRouter.get('/reserves/:reserve_id', controller.getReservationById.bind(controller))
reserveRouter.get('/reservations/user/:user_id', controller.getReservationByUserId.bind(controller))
reserveRouter.post('/create/reserve', authenticateToken, controller.createReservation.bind(controller))
reserveRouter.get(`/filter/reserve`,getFilteredReservation)
export default reserveRouter;
