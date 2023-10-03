/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from './students/student.controller';

import { StudentSchema } from './schema/student';
import { StudentService } from './students/student.service';
import { StudentsModule } from './students/students.module';
import { AppController } from './app.controller';
import { SchoolModule } from './school/school.module';
import { SchoolController } from './no-spec/school/school.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nagaraj03:Nabi0229@amwhiz.ozlipso.mongodb.net/'),
    MongooseModule.forFeature([{ name: 'School/Student', schema: StudentSchema }]),
    StudentsModule,
    SchoolModule,
  ],
  controllers: [StudentController, AppController, SchoolController],
  providers: [StudentService],
})
export class AppModule {}
