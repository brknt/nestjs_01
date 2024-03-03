import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
@ApiTags('Product')
export class ProductController {

    constructor(private readonly productService : ProductService){}

    @Get()
    @ApiOperation({
        summary: 'get active product'
    })
    activeproduct(){
        return this.productService.activeproduct();
    }

    @Post()
    @ApiOperation({
        summary: 'set product'
    })
    create(@Body() createProductDto : CreateProductDto){
        return this.productService.create(createProductDto);
    }
}