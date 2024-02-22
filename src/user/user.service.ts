import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';



@Injectable()
export class UserService {
    private readonly logger: Logger = new Logger(this.constructor.name);

    
    constructor( 
        @InjectRepository(User)
        private readonly userRepository: Repository <User>){}


    activeUsers() {
        return [
            { id: 1, name: "berkant" },
            { id: 2, name: "şaban" }
        ];
    }
    async create(createUserDto: CreateUserDto) {
        const newUser = await this.userRepository.create();
        newUser.id = uuidv4();
        newUser.email=createUserDto.email;
        newUser.name=createUserDto.name;

        this.logger.warn(JSON.stringify(newUser));
        
        return await this.userRepository.save(newUser);
    }
}




