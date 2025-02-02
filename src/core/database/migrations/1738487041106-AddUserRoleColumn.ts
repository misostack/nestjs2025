import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserRoleColumn1738487041106 implements MigrationInterface {
    name = 'AddUserRoleColumn1738487041106'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."jsbase_tasks_status_enum" AS ENUM('PENDING', 'IN_PROGRESS', 'COMPLETED')`);
        await queryRunner.query(`CREATE TABLE "jsbase_tasks" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying(255) NOT NULL, "description" character varying(255) NOT NULL, "status" "public"."jsbase_tasks_status_enum" NOT NULL DEFAULT 'PENDING', CONSTRAINT "PK_abc652a385beefe93d43c85e5d9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "jsbase_tasks"`);
        await queryRunner.query(`DROP TYPE "public"."jsbase_tasks_status_enum"`);
    }

}
