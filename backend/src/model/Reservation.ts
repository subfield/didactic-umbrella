import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./Users";
import { BookingStatus } from "./status.enum";


@Entity("Reservation")
export class Reservation extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column({ type: "varchar", length: 255 })
    shortlet: string

    @Column({ type: "date" })
    checkInDate: Date

    @Column({type: "timestamp", default:()=>"CURRENT_TIMESTAMP"})
    checkInTime: Date

    @Column({ type: "date" })
    checkOutDate: Date

    @Column({type: "timestamp", default:()=>"CURRENT_TIMESTAMP"})
    checkOutTime: Date

    @Column({
        type: "enum",
        enum: BookingStatus,
        default: BookingStatus.UPCOMING,
      })
      status: BookingStatus;

    @Column({ type: "varchar", length: 255 })
    otherInfo: string

    @ManyToOne(()=>User, (user)=> user.reservation,{onDelete:"CASCADE"})
    @JoinColumn({name:"user_id"})
    user:User
}