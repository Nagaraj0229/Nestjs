/* eslint-disable prettier/prettier */
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
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
      const response = newStudent.save();
      Logger.log('Create Student Response Data', { data: response });
      return response;
    } catch (err) {
      Logger.error('StudentService: Cannot Create Student', { error: err?.message });
    }
  }

  public async updateStudent(studentId: string, updateStudentDto: UpdateStudentDto): Promise<IStudent> {
    try {
      const existingStudent = await this.studentModel.findByIdAndUpdate(studentId, updateStudentDto, { new: true });
      Logger.log('Update Student Data', { data: existingStudent });
      if (!existingStudent) throw new NotFoundException(`Student not found`);
      return existingStudent;
    } catch (err) {
      Logger.error('Error On Updating Student Data', { error: err?.message });
    }
  }

  public async getAllStudents(): Promise<IStudent[]> {
    try {
      const studentData = await this.studentModel.find();
      Logger.log('Get Overall Student Response Data', { data: studentData });
      return studentData;
    } catch (err) {
      Logger.error('Error on Get All Students', { error: err?.message });
    }
  }

  public async getStudent(studentId: string): Promise<IStudent> {
    try {
      const existingStudent = await this.studentModel.findById(studentId).exec();
      Logger.log('Get Student Data By Id', { data: existingStudent });
      if (!existingStudent) throw new NotFoundException(`Student ${studentId} not found`);
      return existingStudent;
    } catch (err) {
      Logger.error('Error on Get Student By Id', { error: err?.message });
    }
  }

  public async deleteStudent(studentId: string): Promise<IStudent> {
    try {
      const deletedStudent = await this.studentModel.findByIdAndDelete(studentId);
      Logger.log('Deleting Student Response Data', { data: deletedStudent });
      if (!deletedStudent) throw new NotFoundException(`Student #${studentId} not found`);
      return deletedStudent as any;
    } catch (err) {
      Logger.error('Error On Deleting Student Data', { error: err?.message });
    }
  }
}
