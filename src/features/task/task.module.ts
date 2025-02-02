import { Module } from '@nestjs/common';
import { TaskController } from './presentation/task.controller';
import { TaskService } from './business/task.service';
import { TaskRepository } from './persistence/task-repository';
import { DatabaseModule } from '@core/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TaskController],
  providers: [TaskRepository, TaskService],
})
export class TaskModule {}
