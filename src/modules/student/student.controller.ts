import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './student.entity';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/role.enum';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}

    // GET: students
    @Get()
    @UseGuards(AuthGuard('jwt'))
    @Roles(Role.Instructor, Role.Secretario)
    async findAll(): Promise<Student[]> {
        return this.studentsService.findAll();
    }

    // GET: students/:id
    @Get(':id')
    @UseGuards(AuthGuard('jwt'))
    @Roles(Role.Instructor, Role.Secretario)
    async findOne(@Param('id') id: string): Promise<Student> {
        return this.studentsService.findOne(id);
    }

    // POST: students
    @Post()
    @UseGuards(AuthGuard('jwt'))
    @Roles(Role.Secretario)
    async create(@Body() student: Student): Promise<Student> {
        return this.studentsService.create(student);
    }

    // PUT: students/:id
    @Put(':id')
    @UseGuards(AuthGuard('jwt'))
    @Roles(Role.Secretario)
    async update(@Param('id') id: string, @Body() student: Student): Promise<Student> {
        return this.studentsService.update(id, student);
    }

    // DELETE: students/:id
    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    @Roles(Role.Secretario)
    async remove(@Param('id') id: string): Promise<void> {
        return this.studentsService.remove(id);
    }
}