import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from './students/controllers/student.controller';

import { StudentSchema } from './libs/schema/student.schema';
import { StudentService } from './students/services/student.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nagaraj03:Nabi0229@amwhiz.ozlipso.mongodb.net/',
    ),
    MongooseModule.forFeature([
      { name: 'School/Student', schema: StudentSchema },
    ]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class AppModule {}
