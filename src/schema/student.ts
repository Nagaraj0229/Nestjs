import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Student {
  @Prop({
    type: 'string',
  })
  first_name?: string;

  @Prop({
    type: 'string',
  })
  last_name?: string;

  @Prop({ type: 'number', unique: true })
  roll_no?: number;

  @Prop()
  class?: string;

  @Prop({
    type: 'string',
    enum: ['male', 'female', 'other'],
  })
  gender?: string;

  @Prop({
    type: 'string',
  })
  phone_no?: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
