import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Edition } from '../edition/edition.entity'; // Verifica que esta ruta sea correcta
import { Student } from '../student/student.entity';

@Schema()
export class StudentEdition extends Document {
    @Prop({ required: true })
    idStudent: string;

    @Prop({ required: true })
    idEdition: string;

    @Prop({ type: Edition })
    edition: Edition;

    @Prop({ type: Student })
    student: Student;
}

export const StudentEditionSchema = SchemaFactory.createForClass(StudentEdition);
