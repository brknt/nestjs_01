import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";



export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: 'Berkant Güneş',
      })
    name: string;

    @ApiProperty({
        example: 'brknt.gns@hotmail.com',
      })
    @IsEmail()
    email: string;

}