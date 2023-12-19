/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from "@nestjs/common";
import { Logger } from "@nestjs/common";
import { CreateStudentDto } from "src/students/dto/create-student.dto";
import { UpdateStudentDto } from "src/students/dto/update-student.dto";
import StudentService from "./student.service";

@Controller("students")
export default class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @HttpCode(201)
  public async createStudent(
    @Res() response,
    @Body() createStudentDto: CreateStudentDto,
  ) {
    try {
      const newStudent =
        await this.studentService.createStudent(createStudentDto);
      const response = {
        message: "Student has been created successfully",
        newStudent,
      };
      Logger.log("Create Student Data Response", { data: response });
      return response;
    } catch (err) {
      Logger.error("Error on Create Student Data", err.response);
      return response.status(err.status).json(err.response);
    }
  }

  @Put("/:id")
  public async updateStudent(
    @Res() response,
    @Param("id") studentId: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    try {
      const existingStudent = await this.studentService.updateStudent(
        studentId,
        updateStudentDto,
      );
      const responseData = response.status(HttpStatus.OK).json({
        message: "Student has been successfully updated",
        existingStudent,
      });
      Logger.log("Update Student Data Response", { data: responseData });
    } catch (err) {
      Logger.error("Error on Update Student Data", { error: err?.message });
      return response.status(err.status).json(err.response);
    }
  }

  @Get()
  public async getStudents(@Res() response) {
    try {
      const studentData = await this.studentService.getAllStudents();
      const resposeData = response.status(HttpStatus.OK).json({
        message: "All students data found successfully",
        studentData,
      });
      Logger.log("Get Students Data Response", { data: resposeData });
      return resposeData;
    } catch (err) {
      Logger.error("Error on Get Overall Students Data", {
        error: err?.message,
      });
      return response.status(err.status).json(err.response);
    }
  }

  @Get("/:id")
  public async getStudent(@Res() response, @Param("id") studentId: string) {
    try {
      const existingStudent = await this.studentService.getStudent(studentId);
      const responseData = response.status(HttpStatus.OK).json({
        message: "Student found successfully",
        existingStudent,
      });
      Logger.log("Get Student Data By Id Response", { data: responseData });
      return responseData;
    } catch (err) {
      Logger.error("Error On Get Student Data By Id", { error: err?.message });
      return response.status(err.status).json(err.response);
    }
  }

  @Delete("/:id")
  @HttpCode(204)
  public async deleteStudent(@Res() response, @Param("id") studentId: string) {
    try {
      const deletedStudent = await this.studentService.deleteStudent(studentId);
      const responseData = response.status(HttpStatus.OK).json({
        message: "Student deleted successfully",
        deletedStudent,
      });
      Logger.log("Delete Student Data Response", { data: responseData });
      return responseData;
    } catch (err) {
      Logger.error("Error On Deleting Student Data", { error: err?.message });
      return response.status(err.status).json(err.response);
    }
  }
}
