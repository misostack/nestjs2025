import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  AfterLoad,
} from 'typeorm';
import {
  BaseEntity,
  generateEntityTableName,
  generateForeignKeyConstraintName,
} from '@core/database/database.helpers';

const TABLE_NAME = 'tasks';

export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

@Entity({
  name: generateEntityTableName(TABLE_NAME),
})
export class Task extends BaseEntity<Task> {
  @Column('varchar', { length: 255, nullable: false })
  name: string;
  @Column('varchar', { length: 255, nullable: false })
  description: string;
  @Column('enum', {
    enum: TaskStatus,
    default: TaskStatus.PENDING,
  })
  status: TaskStatus;
  // computed properties
  get taskInformation(): string {
    return ``;
  }
}
