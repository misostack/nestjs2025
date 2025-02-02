import { Inject, Injectable } from '@nestjs/common';
import { TaskRepository } from '../persistence/task-repository';

@Injectable()
export class TaskService {
  constructor(@Inject() private taskRepository: TaskRepository) {
    console.log('TaskService instantiated');
  }
  getTasks() {
    return this.taskRepository.find();
  }
}
