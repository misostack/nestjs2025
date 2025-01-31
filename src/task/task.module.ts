import { Module } from '@nestjs/common';
import { TaskController } from './presentation/task.controller';
import { TaskService } from './business/task.service';
import { TaskRepository } from './data/task-repository';

@Module({
  controllers: [TaskController],
  providers: [TaskRepository, TaskService],
})
export class TaskModule {}
