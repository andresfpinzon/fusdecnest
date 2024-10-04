import { Injectable } from '@nestjs/common';
import { Attendance } from './attendance.entity'; // Asegúrate de que la ruta sea correcta

@Injectable()
export class AttendanceService {
    private attendances: Attendance[] = []; // Simulación de almacenamiento

    async findAll(): Promise<Attendance[]> {
        return this.attendances; // Lógica para obtener todas las asistencias
    }
    async findOne(id: string): Promise<Attendance> {
        return this.attendances.find((attendance: Attendance) => attendance.id === id); // Lógica para encontrar una asistencia por ID
    }

    async create(attendance: Attendance): Promise<Attendance> {
        this.attendances.push(attendance); // Lógica para crear una nueva asistencia
        return attendance;
    }

    async update(id: string, attendance: Attendance): Promise<Attendance> {
        const index = this.attendances.findIndex(a => a.id === id);
        if (index > -1) {
            this.attendances[index] = attendance; // Lógica para actualizar una asistencia
            return attendance;
        }
        throw new Error('Asistencia no encontrada');
    }

    async remove(id: string): Promise<void> {
        // Asegúrate de que la interfaz o clase Attendance tenga la propiedad 'id'
        this.attendances = this.attendances.filter((a: Attendance) => a.id !== id); // Lógica para eliminar una asistencia
    }
}
