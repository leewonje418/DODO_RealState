import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, BaseEntity} from "typeorm";
import {User} from "./User";

@Entity('sales')
export default class Sales extends BaseEntity{
    @PrimaryGeneratedColumn()
    idx: number;

    @Column({
        length: 255,
        nullable: true,
    })
    image: String;

    @Column({
        length: 255,
        nullable: false,
    })
    name: String;

    @Column({
        length: 255,
        nullable: false,
    })
    transaction_type: String;

    @Column({
        length: 255,
        nullable: false,
    })
    market_price: String;
    
    @Column({
        length: 255,
        nullable: false,
    })
    area: String;

    @Column({
        length: 255,
        nullable: false,
    })
    address: String;

    @ManyToMany(() => User)
    @JoinTable()
    likes: User[];
}