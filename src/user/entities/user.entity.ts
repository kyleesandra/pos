import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    nama_user : string

    @Column()
    email : string

    @Column()
    username : string

    @Column()
    password : string

    @CreateDateColumn()
    create_at : Date

    @UpdateDateColumn()
    update_at : Date
}
