import { Injectable, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ProductService {
   

    constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) { }


    async all() {
        return await this.productRepository.find();
    }



    async create(createProductDto: CreateProductDto) {

        const newProduct = await this.productRepository.create();
        newProduct.name = createProductDto.name;

        return await this.productRepository.save(newProduct);
    }




    async update(id, createProductDto: CreateProductDto) {
        const product = await this.productRepository.findOne({
            where: {
                id: id
            }
        });

        if (product) {
            product.name = createProductDto.name;
        } else {

        }
        return await this.productRepository.save(product);



    }


    async delete(id: string) {
        const product = await this.productRepository.findOne({
            where:{
                id:id
            }
        })

        if(product){
            return await this.productRepository.softDelete(id);
        }else{

        }

    }

}


