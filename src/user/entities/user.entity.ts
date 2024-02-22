import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {
    @Column()
    @PrimaryColumn()
    id:string;
    
    @Column()
    name:string;

    @Column()
    email:string;

}