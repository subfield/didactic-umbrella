import {User} from "../model/Users";

declare global {
  namespace Express {
    interface Request {
      userx?: {email: string; id: string};
    }
  }
}
