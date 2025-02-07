import {BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Reservation } from './Reservation';
import { Session } from './Session';
import { RequestService } from './RequestService';
@Entity('Users')

export class User extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 255 })
    firstName: string;

    @Column({ type: "varchar", length: 255 })
    lastName: string;

    @Column({ type: "varchar", length: 255 })
    email: string;

    @Column({ type: "varchar", length: 255 })
    phone: string;

    @Column({ type: "varchar", length: 255 })
    password: string;

    @Column({ type: "boolean"})
    isEmailVerified: boolean;

    @Column({ type: "varchar", length: 255 })
    verificationToken: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
    
    @OneToMany(()=>Reservation,(reservation)=>reservation.user)
    reservation: Reservation

    @OneToMany(()=>Session,(session)=>session.user)
    session: Session

    @OneToMany(()=>RequestService,(requestService)=>requestService.user)
    requestService: RequestService

}