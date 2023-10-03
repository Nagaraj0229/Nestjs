/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly first_name: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly last_name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly roll_no: number;

  @IsString()
  @IsNotEmpty()
  readonly class: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly gender: string;

  @IsNumber()
  @IsNotEmpty()
  readonly phone_no: string;
}
