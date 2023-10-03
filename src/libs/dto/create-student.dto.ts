/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
export class CreateStudentDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;
  @IsNumber()
  @IsNotEmpty()
  readonly rollNumber: number;

  @IsString()
  @IsNotEmpty()
  readonly class: string;
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly gender: string;
  @IsNumber()
  @IsNotEmpty()
  readonly marks: number;
}
