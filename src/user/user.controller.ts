import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    activeUsers() {
        return this.userService.activeUsers();
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {

        return this.userService.create(createUserDto);

    }

    @Patch(':id')
     update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {

        return  this.userService.update(id,updateUserDto);

    }

    @Delete(':id')
     delete(@Param('id') id:string){
        return  this.userService.delete(id);
    }
    



}
