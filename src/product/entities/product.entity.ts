import { MainEntity } from "src/entities/main.entity";
import { Column, Entity } from "typeorm";


@Entity()
export class Product extends MainEntity{

    @Column()
    name: string



}