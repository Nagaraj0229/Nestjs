/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateStudentDto } from 'src/students/dto/create-student.dto';
import { IStudent } from 'src/students/interfaces/student.interface';
import { Model } from 'mongoose';
import { UpdateStudentDto } from 'src/students/dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(@InjectModel('School/Student') private studentModel: Model<IStudent>) {}

  async createStudent(createStudentDto: CreateStudentDto): Promise<IStudent> {
    const newStudent = new this.studentModel(createStudentDto);
    return newStudent.save();
  }

  async updateStudent(studentId: string, updateStudentDto: UpdateStudentDto): Promise<IStudent> {
    const existingStudent = await this.studentModel.findByIdAndUpdate(studentId, updateStudentDto, { new: true });
    if (!existingStudent) throw new NotFoundException(`Student not found`);
    return existingStudent;
  }

  async getAllStudents(): Promise<IStudent[]> {
    const studentData = await this.studentModel.find();
    return studentData;
  }

  async getStudent(studentId: string): Promise<IStudent> {
    const existingStudent = await this.studentModel.findById(studentId).exec();
    if (!existingStudent) throw new NotFoundException(`Student ${studentId} not found`);
    return existingStudent;
  }

  async deleteStudent(studentId: string): Promise<IStudent> {
    const deletedStudent = await this.studentModel.findByIdAndDelete(studentId);
    if (!deletedStudent) throw new NotFoundException(`Student #${studentId} not found`);
    return deletedStudent as any;
  }
}
