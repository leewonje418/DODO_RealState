import {Entity, PrimaryColumn, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryColumn({
        length: 255,
        nullable: false,
    })
    account: String;

    @Column({
        length: 255,
        nullable: false
    })
    password: string;
    
    @Column({
        length: 255,
        nullable: false
    })
    nickname: string;
}
