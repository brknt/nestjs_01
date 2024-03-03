
import { MainEntity } from "src/entities/main.entity";
import { Column, Entity } from "typeorm";
@Entity()
export class User extends MainEntity {


    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    birthDay: Date;



}