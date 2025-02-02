import { Module } from '@nestjs/common';
import { TaskModule } from './features/task/task.module';
import { DatabaseModule } from './core/database/database.module';

@Module({
  controllers: [],
  providers: [],
  imports: [TaskModule, DatabaseModule],
})
export class AppModule {}
