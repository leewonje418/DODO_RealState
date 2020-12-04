import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, BaseEntity} from "typeorm";
import {User} from "./User";

@Entity('sales')
export default class Sales extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255,
        nullable: true,
    })
    image: String;

    @Column({
        length: 255,
        nullable: false,
        default: '',
    })
    name: String;

    @Column({
        length: 255,
        nullable: false,
        default: '',
    })
    transaction_type: String;

    @Column({
        length: 255,
        nullable: false,
        default: '',
    })
    market_price: String;
    
    @Column({
        length: 255,
        nullable: false,
        default: '',
    })
    area: String;

    @Column({
        length: 255,
        nullable: false,
        default: '',
    })
    address: String;

    @Column({
        nullable: false,
        default: false
    })
    isDeleted: boolean;

    @ManyToMany(() => User)
    @JoinTable()
    likes: User[];
}