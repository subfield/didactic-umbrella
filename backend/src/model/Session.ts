import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./Users";
import { BookingStatus } from "./status.enum";

@Entity("Session")
export class Session extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "date" })
    date: Date;

    @Column({type: "timestamp", default:()=>"CURRENT_TIMESTAMP"})
    time: Date;

    @Column({ type: "varchar", length: 255 })
    purpose: string

   @Column({
           type: "enum",
           enum: BookingStatus,
           default: BookingStatus.UPCOMING,
         })
         status: BookingStatus;

    @Column({ type: "varchar", length: 255 })
    otherInfo: string

    @ManyToOne(()=>User, (user)=> user.session,{onDelete:"CASCADE"})
    @JoinColumn({name:"user_id"})
    user:User
}
