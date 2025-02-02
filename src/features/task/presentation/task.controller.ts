import { Controller, Get, Inject } from '@nestjs/common';
import { TaskService } from '../business/task.service';

@Controller('tasks')
export class TaskController {
  constructor(@Inject() private taskService: TaskService) {}
  @Get()
  getTasks() {
    return this.taskService.getTasks();
  }
}
