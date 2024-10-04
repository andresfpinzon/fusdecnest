import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { StudentEdition } from '../studentEdition/studentEdition.entity';

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
        @InjectRepository(StudentEdition)
        private readonly studentEditionRepository: Repository<StudentEdition>,
    ) {}

    async findAll(): Promise<Student[]> {
        return this.studentRepository.find({ relations: ['school', 'unit', 'studentEditions', 'studentEditions.edition'] });
    }

    async findOne(id: string): Promise<Student> {
        // Cambiar el método para usar un objeto de opciones
        return this.studentRepository.findOne({ where: { id } });
    }

    async create(student: Student): Promise<Student> {
        student.idStudent = this.generateId(); // Asigna un nuevo ID
        return this.studentRepository.save(student);
    }

    async update(id: string, student: Student): Promise<Student> {
        await this.studentRepository.update(id, student);
        return this.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.studentRepository.delete(id);
    }

    private generateId(): string {
        // Genera un nuevo ID único (puedes usar una librería o lógica diferente)
        return 'some-unique-id'; // Reemplaza esto con la lógica real para generar un ID
    }
}