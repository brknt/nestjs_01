import { Injectable, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { log } from 'console';

@Injectable()
export class ProductService {
    
    constructor(@InjectRepository(Product) private readonly productRepository : Repository<Product>){}
    

    activeproduct() {
        throw new Error('Method not implemented.');
    }

    async create(createProductDto: CreateProductDto) {
        
        const newProduct = await this.productRepository.create();
        newProduct.id = uuidv4();
        newProduct.name = createProductDto.name;

        return await this.productRepository.save(newProduct);
    }
}


