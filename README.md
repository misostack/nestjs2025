# NestJS 2025 Topics

## Development

```sh
docker-compose -f docker-compose-local.yml up -d
npm i --save @nestjs/typeorm typeorm pg
cp .env.example .env
```

### Migrations with TypeORM

Typescript version

```sh
npm run typeorm:dev migration:show
npm run typeorm:dev migration:generate ./src/core/database/migrations/AddUserRoleColumn
npm run typeorm:dev migration:create -n AddUserRoleColumn
npm run typeorm:dev migration:run
npm run typeorm:dev migration:revert
```

## Topics

### Entry Level

1. [x] Layer Pattern

![Image](https://github.com/user-attachments/assets/6826dddf-32b1-4133-b8f5-4a78bedd3d40)

2. [ ] Data Validation
3. [ ] ORM and Data Migration
4. [ ] Repository Pattern
5. [ ] API Doc
6. [ ] Working with External Service
7. [ ] Authentication and Authorization
8. [ ] CI CD Flow

### Intermediate level

1. [ ] Technique: Queue and Scheduler
2. [ ] Technique: GraphQL
3. [ ] Technique: Websocket
4. [ ] Technique: Logging and Tracing
5. [ ] Technique: AWS Infrastructure Deployment

### Advanced level

1. [ ] Microservice Architecture
2. [ ] Serverless Architecture

## References

- [NestJS Boilerplate 2024](https://github.com/misostack/nestjs-boilerplate-2024/blob/master/README.md)
- [NestJS Data Flow Testing](https://github.com/misostack/nestjs-boilerplate/tree/main/src/persistence/database/tests)
