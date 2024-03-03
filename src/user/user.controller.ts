import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('User')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    @ApiOperation({
        summary:'get active user'
    })
    activeUsers() {
        return this.userService.activeUsers();
    }

    @Post()
    @ApiOperation({
        summary:'create user'
    })
    create(@Body() createUserDto: CreateUserDto) {

        return this.userService.create(createUserDto);

    }

    @Patch(':id')
    @ApiOperation({
        summary:'update user'
    })
     update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {

        return  this.userService.update(id,updateUserDto);

    }

    @Delete(':id')
    @ApiOperation({
        summary:'delete user'
    })
     delete(@Param('id') id:string){
        return  this.userService.delete(id);
    }
    



}
