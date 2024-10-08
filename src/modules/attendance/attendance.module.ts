import { Module } from '@nestjs/common';
import { AttendanceController } from './attendance.controller';
import { AttendanceController } from './attendance/attendance.controller';

@Module({
  controllers: [AttendanceController]
})
export class AttendanceModule {}
