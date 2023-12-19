/* eslint-disable prettier/prettier */
import { IsEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateContact {
  @IsString()
  @MaxLength(30)
  @IsEmpty()
  readonly firstname: string;

  @IsString()
  @MaxLength(35)
  @IsEmpty()
  readonly lastname: string;

  @IsNumber()
  @MaxLength(35)
  @IsEmpty()
  readonly age: number;

  @IsNumber()
  @MaxLength(35)
  @IsEmpty()
  readonly phone: number;
}
