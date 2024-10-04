import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { StudentEdition } from './student-edition.entity';
import { StudentGrade } from './student-grade.entity';
import { StudentNonAttendance } from './student-non-attendance.entity';
import { StudentAttendance } from './student-attendance.entity';
import { Certificate } from './certificate.entity';

@Entity('students')
export class Student {
    @PrimaryGeneratedColumn('uuid')
    idStudent: string;

    @Column()
    studentName: string;

    @Column()
    studentLastName: string;

    @Column()
    documentType: string;

    @Column()
    documentNumber: string;

    @Column()
    studentDateBirth: Date;

    @Column()
    studentGender: string;

    @Column()
    idUnit: string;

    @Column()
    idSchool: string;

    @Column({ default: true })
    studentStatus: boolean;

    @OneToMany(() => StudentEdition, (studentEdition) => studentEdition.student)
    studentEditions: StudentEdition[];

    @OneToMany(() => StudentGrade, (studentGrade) => studentGrade.student)
    studentGrades: StudentGrade[];

    @OneToMany(() => StudentNonAttendance, (studentNonAttendance) => studentNonAttendance.student)
    studentNonAttendances: StudentNonAttendance[];

    @OneToMany(() => StudentAttendance, (studentAttendance) => studentAttendance.student)
    studentAttendances: StudentAttendance[];

    @OneToMany(() => Certificate, (certificate) => certificate.student)
    certificates: Certificate[];
}
