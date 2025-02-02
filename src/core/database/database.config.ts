import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import Entities from './entities';
import { Configuration } from '@common/configuration';

const DIRNAME = __dirname;

const TYPE_ORM_MODULE_OPTIONS: TypeOrmModuleOptions = {
  type: 'postgres',
  url: Configuration.current().DATABASE.URL,
  entities: Entities,
  logging: Configuration.current().DATABASE.QUERY_LOGGING
    ? ['query', 'error']
    : ['error'],
  // must not be synchronize automatically, use data migration instea
  synchronize: false,
  // migrations
  migrations: [`${DIRNAME}/migrations/*.js`, `${DIRNAME}/migrations/*.ts`],
  migrationsTableName: `${Configuration.current().DATABASE.TABLE_PREFIX}_migrations`,
  // use custom repository
  autoLoadEntities: false,
};

export { TYPE_ORM_MODULE_OPTIONS };
