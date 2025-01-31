import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskRepository {
  constructor() {
    console.log('TaskRepository instantiated');
  }
}
