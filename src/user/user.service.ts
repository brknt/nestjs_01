import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';



@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>) { }


    
    async activeUsers() {
        return await this.userRepository.find();
    }

    async create(createUserDto: CreateUserDto) {
        const newUser = await this.userRepository.create();
        newUser.email = createUserDto.email;
        newUser.name = createUserDto.name;
        newUser.birthDay = createUserDto.birthday;

        

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
            user.birthDay = updateUserDto.birthday;

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




