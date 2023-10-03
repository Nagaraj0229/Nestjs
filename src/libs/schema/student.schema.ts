/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Student {
  @Prop()
  name?: string;
  @Prop()
  rollNumber?: number;
  @Prop()
  class?: string;
  @Prop()
  gender?: string;
  @Prop()
  marks?: number;
}
export const StudentSchema = SchemaFactory.createForClass(Student);
