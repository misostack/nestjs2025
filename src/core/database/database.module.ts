import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TYPE_ORM_MODULE_OPTIONS } from './database.config';
import Repositories from './repositories';

@Module({
  imports: [TypeOrmModule.forRoot(TYPE_ORM_MODULE_OPTIONS)],
  providers: [...Repositories],
  exports: [...Repositories],
})
export class DatabaseModule {}
