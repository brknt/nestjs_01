import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
@ApiTags('Product')
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @Get()
    @ApiOperation({
        summary: 'get active product'
    })
    activeProduct() {
        return this.productService.all();
    }


    @Post()
    @ApiOperation({
        summary: 'create product'
    })
    create(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto);
    }


    @Patch(':id')
    @ApiOperation({
        summary: 'update product'
    })
     update(@Param('id') id: string, @Body() createProductDto: CreateProductDto) {
        return  this.productService.update(id,createProductDto)
    }


    @Delete(':id')
    @ApiOperation({
        summary: 'delete product'
    })
    delete(@Param('id') id:string){
        return this.productService.delete(id);
    }
    
}