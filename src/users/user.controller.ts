import { Body, Controller, Get, NotFoundException, Param, Post, Query } from "@nestjs/common";
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery } from "@nestjs/swagger";
import { userInfo } from "os";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

    constructor(private userService: UserService){}
    @ApiOkResponse({type: User, isArray : true})
    @ApiQuery({name : 'name', required:false})
    @Get()
    getUser(@Query('name') name: string): User[] {
        return this.userService.findAll( name)
    }

    @ApiOkResponse({type: User})
    @ApiNotFoundResponse()
    @Get(':id')
    getUserById(@Param('id') id:string): User {
        const user = this.userService.findById(Number(id))

        if(!user) {
            throw new NotFoundException()
        }
        return user; 
    }

    @ApiCreatedResponse({type: User})
    @Post()
    createUser(@Body() body:CreateUserDto):any {
        return this.userService.createUser(body)
    }
}