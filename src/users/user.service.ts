import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { UserModel } from "./user.model";

@Injectable()
export class UserService {
    users : User[] = [
        {id: 0, name: 'adarsh'},
        {id: 1, name: 'adya'},
        {id: 2, name: 'sharma'}
    ];

    // private users:any = [{id: 0, name: 'adarsh'}]


    findAll(name?:string): User[] {
        if(name) {
            return this.users.filter(user => user.name === name)
        }
        return this.users
    }

    findById( userId: Number): User{
        return this.users.find(user => user.id === userId)
    }

    createUser(CreateUserDto: CreateUserDto):User {
        const newUser = {
            id: Math.random(),
            ...CreateUserDto
        }
        this.users.push(newUser)
        return newUser;
    }
}