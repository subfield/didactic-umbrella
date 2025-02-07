import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const JWT_SECRET = process.env.JWT_SECRET || "your_JWT_secret_key";
  const token = req.cookies.token;
  // if (unauthRoutes.includes(req.path)) {
  //   next();
  // }
  if (!token) {
      res.sendStatus(401);
      return
  }
  
  jwt.verify(token, JWT_SECRET, (err: jwt.VerifyErrors | null, data: any) => {
    if (err) {
      res.clearCookie("token");
        res.sendStatus(403);
      return
    }
    
    if (data) {
      const {email, id}: { email: string; id: string } = data;
      req.user = {email, id};
    }
    next();
  })
};

export default validateToken;
