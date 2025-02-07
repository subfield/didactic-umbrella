import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { AppDataSource } from "./database";
import userRouter from "./routes/user.route";
import reserveRouter from "./routes/reservation.route";
import sessionRouter from "./routes/session.route";

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use(userRouter);
app.use(reserveRouter);
app.use(sessionRouter);

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
