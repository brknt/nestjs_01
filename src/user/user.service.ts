import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from './dto/update-user.dto';



@Injectable()
export class UserService {


    private readonly logger: Logger = new Logger(this.constructor.name);


    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>) { }


    
    async activeUsers() {
        return await this.userRepository.find();
    }

    async create(createUserDto: CreateUserDto) {
        const newUser = await this.userRepository.create();
        newUser.id = uuidv4();
        newUser.email = createUserDto.email;
        newUser.name = createUserDto.name;

        this.logger.warn(JSON.stringify(newUser));

        return await this.userRepository.save(newUser);
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        const user = await this.userRepository.findOne({
            where: {
                id: id
            }
        });

        if (user) {
            user.name = updateUserDto.name;
            user.email = updateUserDto.email;

        } else {

        }

        return await this.userRepository.save(user);
    }

    async delete(id: string) {
        const user = await this.userRepository.findOne({
            where:{
                id:id
            }
        });

        if(user){
            return await this.userRepository.softDelete(id); 
        }else{

        }
    }


}




