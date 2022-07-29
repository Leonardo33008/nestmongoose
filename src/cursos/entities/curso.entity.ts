import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CursoDocument = Curso & Document;

@Schema()
export class Curso {
  @Prop()
  nome: string;

  @Prop()
  descricao: string;

  @Prop([String])
  tags: string[];
}

export const CursoSchema = SchemaFactory.createForClass(Curso);
