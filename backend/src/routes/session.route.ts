import express from 'express';
import { sessionController } from '../controllers/session.controller';
import { getFilteredSession } from '../controllers/filterSession.controller';
import authenticateToken from "../middleware/auth.middleware";
const sessionRouter = express.Router();
const controller = new sessionController()

sessionRouter.get('/sessions/user', authenticateToken, controller.getSessionByUserId.bind(controller))
sessionRouter.get('/sessions/:session_id', controller.getSessionById.bind(controller))
sessionRouter.post('/create/sessions', authenticateToken, controller.createSession.bind(controller))
sessionRouter.get(`/sessions`, controller.getAllSession.bind(controller))
sessionRouter.get('/filter/session',getFilteredSession)
export default sessionRouter;