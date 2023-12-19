/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateStudentDto } from 'src/students/dto/create-student.dto';
import { IStudent } from 'src/students/interfaces/student.interface';
import { Model } from 'mongoose';
import { UpdateStudentDto } from 'src/students/dto/update-student.dto';

@Injectable()
export default class StudentService {
  constructor(
    @InjectModel('School/Student')
    public studentModel: Model<IStudent>,
  ) {}

  public async createStudent(createStudentDto: CreateStudentDto): Promise<IStudent> {
    try {
      const newStudent = new this.studentModel(createStudentDto);
      return newStudent.save();
    } catch (e: any) {
      console.error('StudentService: Cannot Create Student', { error: e?.message });
    }
  }

  public async updateStudent(studentId: string, updateStudentDto: UpdateStudentDto): Promise<IStudent> {
    try {
      const existingStudent = await this.studentModel.findByIdAndUpdate(studentId, updateStudentDto, { new: true });
      if (!existingStudent) throw new NotFoundException(`Student not found`);
      return existingStudent;
    } catch (e: any) {}
  }

  public async getAllStudents(): Promise<IStudent[]> {
    try {
      const studentData = await this.studentModel.find();
      return studentData;
    } catch (e: any) {}
  }

  public async getStudent(studentId: string): Promise<IStudent> {
    try {
      const existingStudent = await this.studentModel.findById(studentId).exec();
      if (!existingStudent) throw new NotFoundException(`Student ${studentId} not found`);
      return existingStudent;
    } catch (e: any) {}
  }

  public async deleteStudent(studentId: string): Promise<IStudent> {
    try {
      const deletedStudent = await this.studentModel.findByIdAndDelete(studentId);
      if (!deletedStudent) throw new NotFoundException(`Student #${studentId} not found`);
      return deletedStudent as any;
    } catch (e: any) {}
  }
}
