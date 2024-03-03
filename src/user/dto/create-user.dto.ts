import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsAdult } from "./user.validation";



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

  @ApiProperty({
    example: '1996-06-21'
  })
  @IsDateString()
  @IsAdult({message:'You must be over 18 years old to register!'})
  birthday: Date;

}