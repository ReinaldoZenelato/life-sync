import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateInitialDomainSchema20260426124000
  implements MigrationInterface
{
  name = 'CreateInitialDomainSchema20260426124000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "pgcrypto"');

    await queryRunner.query(`
      CREATE TABLE "user" (
        "id" uuid NOT NULL DEFAULT gen_random_uuid(),
        "email" varchar(255) NOT NULL,
        "password_hash" varchar(255) NOT NULL,
        "is_active" boolean NOT NULL DEFAULT true,
        "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
        "deleted_at" TIMESTAMPTZ,
        CONSTRAINT "PK_user_id" PRIMARY KEY ("id"),
        CONSTRAINT "UQ_user_email" UNIQUE ("email")
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "user_profile" (
        "id" uuid NOT NULL DEFAULT gen_random_uuid(),
        "user_id" uuid NOT NULL,
        "full_name" varchar(120) NOT NULL,
        "birth_date" date,
        "biological_sex" varchar(20),
        "height_cm" numeric(5,2),
        "activity_level" varchar(30),
        "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
        "deleted_at" TIMESTAMPTZ,
        CONSTRAINT "PK_user_profile_id" PRIMARY KEY ("id"),
        CONSTRAINT "UQ_user_profile_user_id" UNIQUE ("user_id"),
        CONSTRAINT "FK_user_profile_user_id" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "nutrition_goal" (
        "id" uuid NOT NULL DEFAULT gen_random_uuid(),
        "user_id" uuid NOT NULL,
        "daily_calorie_target" integer,
        "daily_protein_target_g" integer,
        "daily_carbs_target_g" integer,
        "daily_fat_target_g" integer,
        "daily_water_target_ml" integer,
        "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
        "deleted_at" TIMESTAMPTZ,
        CONSTRAINT "PK_nutrition_goal_id" PRIMARY KEY ("id"),
        CONSTRAINT "UQ_nutrition_goal_user_id" UNIQUE ("user_id"),
        CONSTRAINT "FK_nutrition_goal_user_id" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "weight_log" (
        "id" uuid NOT NULL DEFAULT gen_random_uuid(),
        "user_id" uuid NOT NULL,
        "weight_kg" numeric(5,2) NOT NULL,
        "logged_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
        "note" varchar(255),
        "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
        CONSTRAINT "PK_weight_log_id" PRIMARY KEY ("id"),
        CONSTRAINT "FK_weight_log_user_id" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE
      )
    `);
    await queryRunner.query(`
      CREATE INDEX "IDX_weight_log_user_logged_at"
      ON "weight_log" ("user_id", "logged_at")
    `);

    await queryRunner.query(`
      CREATE TABLE "water_log" (
        "id" uuid NOT NULL DEFAULT gen_random_uuid(),
        "user_id" uuid NOT NULL,
        "amount_ml" integer NOT NULL,
        "logged_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
        "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
        CONSTRAINT "PK_water_log_id" PRIMARY KEY ("id"),
        CONSTRAINT "FK_water_log_user_id" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE
      )
    `);
    await queryRunner.query(`
      CREATE INDEX "IDX_water_log_user_logged_at"
      ON "water_log" ("user_id", "logged_at")
    `);

    await queryRunner.query(`
      CREATE TABLE "meal" (
        "id" uuid NOT NULL DEFAULT gen_random_uuid(),
        "user_id" uuid NOT NULL,
        "meal_type" varchar(20) NOT NULL,
        "title" varchar(120),
        "consumed_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
        "notes" text,
        "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
        "deleted_at" TIMESTAMPTZ,
        CONSTRAINT "PK_meal_id" PRIMARY KEY ("id"),
        CONSTRAINT "FK_meal_user_id" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE
      )
    `);
    await queryRunner.query(`
      CREATE INDEX "IDX_meal_user_consumed_at"
      ON "meal" ("user_id", "consumed_at")
    `);

    await queryRunner.query(`
      CREATE TABLE "meal_entry" (
        "id" uuid NOT NULL DEFAULT gen_random_uuid(),
        "meal_id" uuid NOT NULL,
        "name" varchar(160) NOT NULL,
        "quantity" numeric(10,2) NOT NULL,
        "unit" varchar(30) NOT NULL,
        "calories" integer,
        "protein_g" numeric(10,2),
        "carbs_g" numeric(10,2),
        "fat_g" numeric(10,2),
        "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
        CONSTRAINT "PK_meal_entry_id" PRIMARY KEY ("id"),
        CONSTRAINT "FK_meal_entry_meal_id" FOREIGN KEY ("meal_id") REFERENCES "meal"("id") ON DELETE CASCADE
      )
    `);
    await queryRunner.query(`
      CREATE INDEX "IDX_meal_entry_meal_id"
      ON "meal_entry" ("meal_id")
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP INDEX IF EXISTS "IDX_meal_entry_meal_id"');
    await queryRunner.query('DROP TABLE IF EXISTS "meal_entry"');

    await queryRunner.query('DROP INDEX IF EXISTS "IDX_meal_user_consumed_at"');
    await queryRunner.query('DROP TABLE IF EXISTS "meal"');

    await queryRunner.query('DROP INDEX IF EXISTS "IDX_water_log_user_logged_at"');
    await queryRunner.query('DROP TABLE IF EXISTS "water_log"');

    await queryRunner.query('DROP INDEX IF EXISTS "IDX_weight_log_user_logged_at"');
    await queryRunner.query('DROP TABLE IF EXISTS "weight_log"');

    await queryRunner.query('DROP TABLE IF EXISTS "nutrition_goal"');
    await queryRunner.query('DROP TABLE IF EXISTS "user_profile"');
    await queryRunner.query('DROP TABLE IF EXISTS "user"');

    await queryRunner.query('DROP EXTENSION IF EXISTS "pgcrypto"');
  }
}
