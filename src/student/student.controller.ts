import { Controller, Get, Post, Put } from "@nestjs/common";
import { StudentService } from "./student.service";

@Controller('student')
export class StudentController {
     constructor( private Student : StudentService) {}

    @Get()
    getStudent() {
        return "All Student"
    }

    @Get('/:studentId')
    getStudentById() {
        return "Get Student by id"
    }

    @Post()
    craeteStudent() {
        return "Create Student"
    }

    @Put('/:studentId') 
    updateStudent() {
        return "Update student"
    }
}