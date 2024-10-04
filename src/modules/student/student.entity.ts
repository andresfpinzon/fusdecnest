import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('students') // Nombre de la tabla en la base de datos
export class Student {
  @PrimaryGeneratedColumn() // Genera un ID único
  id: number;

  @Column() // Columna para el nombre del estudiante
  name: string;

  @Column() // Columna para el apellido del estudiante
  lastName: string;

  @Column() // Columna para la edad del estudiante
  age: number;

  @Column() // Columna para el correo electrónico del estudiante
  email: string;

  // Puedes agregar más propiedades según sea necesario
}
