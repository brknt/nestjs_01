import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
@ApiTags('user')
export class User {
    @Column()
    @PrimaryColumn()
    id: string;

    @Column()
    @ApiProperty()
    name: string;

    @ApiProperty()
    @Column()
    email: string;


    @Column()
    birthDay: Date;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt!: Date;

}