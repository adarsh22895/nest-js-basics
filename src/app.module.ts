import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProducsModule } from './products/products.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [ProducsModule,UserModule,StudentModule,TeacherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
