import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Curso, CursoDocument } from './entities/curso.entity';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class CursosService {
  constructor(
    @InjectModel(Curso.name) private cursoModel: Model<CursoDocument>,
  ) {}

  create(createCursoDto: CreateCursoDto) {
    const curso = new this.cursoModel(createCursoDto);
    return curso.save();
  }

  findAll() {
    return this.cursoModel.find();
  }

  findOne(id: number) {
    return this.cursoModel.findOne({ id });
  }

  update(id: string, updateCursoDto: UpdateCursoDto) {
    const curso = this.cursoModel.findByIdAndUpdate(id, updateCursoDto);
    return curso.updateOne();
  }

  remove(id: string) {
    return this.cursoModel.deleteOne({ _id: id });
  }
}
