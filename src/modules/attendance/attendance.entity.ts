// src/modules/attendance/attendance.controller.ts

import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Query } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../auth/roles.decorator'; // Verifica que esta ruta sea correcta
import { Role } from '../auth/role.enum';

@Controller('attendances')
@UseGuards(AuthGuard('jwt'))
export class AttendanceController {
    constructor(private readonly attendanceService: AttendanceService) {}

    @Get()
    @Roles(Role.Instructor, Role.Administrator)
    async findAll() {
        return this.attendanceService.findAll();
    }

    @Get(':id')
    @Roles(Role.Instructor, Role.Administrator)
    async findOne(@Param('id') id: string) {
        return this.attendanceService.findOne(id);
    }

    @Post()
    @Roles(Role.Instructor)
    async create(@Body() attendance: Attendance) {
        return this.attendanceService.create(attendance);
    }

    @Put(':id')
    @Roles(Role.Instructor)
    async update(@Param('id') id: string, @Body() attendance: Attendance) {
        return this.attendanceService.update(id, attendance);
    }

    @Delete(':id')
    @Roles(Role.Instructor)
    async remove(@Param('id') id: string) {
        return this.attendanceService.remove(id);
    }
}