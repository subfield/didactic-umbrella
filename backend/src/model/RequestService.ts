import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./Users";

@Entity("RequestService")
export class RequestService extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;


    @Column({ type: "varchar", length: 255 })
    service: string

    @Column({ type: "varchar", length: 255 })
    serviceType: string

      @ManyToOne(()=>User, (user)=> user.requestService,{onDelete:"CASCADE"})
        @JoinColumn({name:"user_id"})
        user:User

    @Column({ type: "varchar", length: 255 })
    businessName: string

    @Column({ type: "varchar", length: 255 })
    businessIndustry: string

    @Column({ type: "varchar", length: 255, nullable: true })
    businessEmail: string

    @Column({ type: "varchar", length: 255, nullable: true })
    businessLocation: string

    @Column({ type: "varchar", length: 255, nullable: true })
    businessBrief: string

    @Column({ type: "varchar", length: 255, nullable: true })
    whyApply: string

    @Column({ type: "varchar", length: 255 })
    otherInfo: string

}