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

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAAt!: Date;

}