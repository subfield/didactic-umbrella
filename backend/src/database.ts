import "reflect-metadata";
import { DataSource } from "typeorm"
import { User } from "./model/Users"
import { Session } from "./model/Session";
import { Reservation } from "./model/Reservation";
import { RequestService } from "./model/RequestService";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: [User, Session, Reservation, RequestService],
    migrations: [],
    subscribers: [],
})

