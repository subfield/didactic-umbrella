import express from 'express'
import { registerController } from '../controllers/auth.controller';
import validateToken from "../middleware/validate.middleware";
const userRouter = express.Router();
const controller = new registerController();

userRouter.get(`/users`, controller.getAllUsers.bind(controller));
userRouter.post(`/create/user`, controller.createUser.bind(controller));
userRouter.get(`/getUser/:id`, controller.getUserById.bind(controller));
userRouter.post(`/verify-token`,controller.verifyUser.bind(controller))
userRouter.post(`/resend-token`,controller.ResendToken.bind(controller))
userRouter.post(`/login`, controller.login.bind(controller))
userRouter.post(`/validate`, validateToken, controller.getUserById.bind(controller));

export default userRouter;
