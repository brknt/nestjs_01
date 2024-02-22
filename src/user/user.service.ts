import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    activeUsers() {
        return [
            { id: 1, name: "berkant" },
            { id: 2, name: "şaban" }
        ];
    }
    create(CreateUserDto: CreateUserDto) {
        console.log(CreateUserDto);

        return { message: "success", CreateUserDto };
    }
}
