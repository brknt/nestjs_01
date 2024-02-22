import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    activeUsers() {
        return this.userService.activeUsers();
    }

    @Post()
    create(@Body() body: CreateUserDto) {
        console.log(body);

        return this.userService.create(body);

    }



}
