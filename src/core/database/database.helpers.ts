import { Configuration } from '@common/configuration';
import { BaseEntity as TypeOrmBaseEntity } from 'typeorm';
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

const TABLE_PREFIX = Configuration.current().DATABASE.TABLE_PREFIX;

class BaseEntity<T> extends TypeOrmBaseEntity {
  constructor(payload: Partial<T>) {
    super();
    Object.assign(this, payload);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  updatedAt: Date;
}

const generateEntityTableName = (entityName: string) => {
  return `${TABLE_PREFIX}_${entityName}`.toLowerCase();
};

const generateForeignKeyConstraintName = ({
  from,
  fromKey,
  to,
  toKey,
}: {
  from: string;
  fromKey: string;
  to: string;
  toKey: string;
}) => {
  return `FK_${[`${TABLE_PREFIX}_${from}`, fromKey, `${TABLE_PREFIX}_${to}`, toKey].join('_')}`;
};

export {
  BaseEntity,
  generateEntityTableName,
  generateForeignKeyConstraintName,
};
