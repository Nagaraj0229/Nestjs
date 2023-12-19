/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule
import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from './students/student.controller';
import { StudentSchema } from './schema/student';
import { StudentService } from './students/student.service';
import { StudentsModule } from './students/students.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load the configuration module
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([{ name: 'School/Student', schema: StudentSchema }]),
    StudentsModule,
  ],
  controllers: [StudentController, AppController],
  providers: [StudentService],
})
export class AppModule {}
