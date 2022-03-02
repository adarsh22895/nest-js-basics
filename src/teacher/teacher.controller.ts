import { Controller, Get, Post, Put } from "@nestjs/common";
import { TeacherService } from "./teacher.service";

@Controller('teacher')
export class TeacherController {
    constructor (private TeacherService : TeacherService){}

    @Get()
    getAllTeacher() {
        return "All Teacher"
    }

    @Get('/:teachers')
    getTeacherById() {
        return "get teacher By ID"
    }

    @Post()
    createTeacher() {
        return "teacher crate"
    }

    @Put()
    updateTeacher() {
        return "update Teacher"
    }
}