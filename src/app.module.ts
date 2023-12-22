/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config"; // Import ConfigModule
import { MongooseModule } from "@nestjs/mongoose";
import { CatController } from "./cats/cat.controller";
import { StudentSchema } from "./schema/student";
import CatService from "./students/student.service";
import { StudentsModule } from "./students/students.module";
import { StudentModule } from "./cats/cat.module";

@Module({
  imports: [
    ConfigModule.forRoot(), // Load the configuration module
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([
      { name: "School/Student", schema: StudentSchema },
    ]),
    StudentsModule,
    StudentModule,
  ],
  controllers: [CatController],
  providers: [CatService],
})
export class AppModule {}
