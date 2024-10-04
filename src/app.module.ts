import { Module } from '@nestjs/common';
import { AttendanceModule } from './modules/attendance/attendance.module'; // Asegúrate de importar tus módulos
import { StudentModule } from './modules/student/student.module';
import { StudentEditionModule } from './modules/studentEdition/studentEdition.module';
import { EditionModule } from './modules/edition/edition.module';
import { SchoolModule } from './modules/school/school.module';
import { UnitModule } from './modules/unit/unit.module';
import { AuthModule } from './modules/auth/auth.module';
import { AttendanceService } from './modules/attendance/attendance.service'; // Corrige la ruta de importación
import { StudentsService } from './modules/student/student.service'; // Cambiado StudentService a StudentsService
import { StudentEditionService } from './modules/studentEdition/studentEdition.service'; // Asegúrate de importar el servicio
import { EditionService } from './modules/edition/edition.service'; // Asegúrate de importar el servicio
import { SchoolService } from './modules/school/school.service'; // Asegúrate de importar el servicio
import { UnitService } from './modules/unit/unit.service'; // Asegúrate de importar el servicio
import { AuthService } from './modules/auth/auth.service'; // Asegúrate de importar el servicio

import { AttendanceController } from './modules/attendance/attendance.controller'; // Asegúrate de importar el controlador
import { StudentController } from './modules/student/student.controller'; // Asegúrate de importar el controlador
import { StudentEditionController } from './modules/studentEdition/studentEdition.controller'; // Asegúrate de importar el controlador
import { EditionController } from './modules/edition/edition.controller'; // Asegúrate de importar el controlador
import { SchoolController } from './modules/school/school.controller'; // Asegúrate de importar el controlador
import { UnitController } from './modules/unit/unit.controller'; // Asegúrate de importar el controlador
import { AuthController } from './modules/auth/auth.controller'; // Asegúrate de importar el controlador

@Module({
  imports: [AttendanceModule, StudentModule, StudentEditionModule, EditionModule, SchoolModule, UnitModule, AuthModule], // Agrega aquí tus módulos
  controllers: [AttendanceController, StudentController, StudentEditionController, EditionController, SchoolController, UnitController, AuthController],
  providers: [AttendanceService, StudentsService, StudentEditionService, EditionService, SchoolService, UnitService, AuthService],
})
export class AppModule {}
