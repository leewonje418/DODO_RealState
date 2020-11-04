import {Entity, PrimaryColumn, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    idx: number;

    @PrimaryColumn({
        length: 255,
        nullable: false,
    })
    id: String;

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
