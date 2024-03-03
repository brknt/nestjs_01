import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class CreateProductDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: 'Product Name1'
    })
    name:string


}