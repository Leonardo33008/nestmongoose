import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Curso } from '../../cursos/entities/curso.entity';
import mongoose from 'mongoose';

export type AlunoDocument = Aluno & Document;

@Schema()
export class Aluno {
  @Prop()
  nome: string;

  @Prop()
  matricula: number;

  @Prop()
  dataMatricula: Date;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Curso' }],
  })
  curso: Curso;
}

export const AlunoSchema = SchemaFactory.createForClass(Aluno);
