import { Inject, Injectable } from '@nestjs/common';
import { TaskRepository } from '../data/task-repository';

@Injectable()
export class TaskService {
  constructor(@Inject() private taskRepository: TaskRepository) {
    console.log('TaskService instantiated');
  }
}
