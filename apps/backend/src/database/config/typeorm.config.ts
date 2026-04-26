import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';
import { databaseConfig } from './database.config';

const DATABASE_CONFIG_KEY = 'database';
const MIGRATIONS_GLOB = [
  'src/database/migrations/*.ts',
  'dist/database/migrations/*.js',
];
const ENTITIES_GLOB = ['src/**/*.entity.ts', 'dist/**/*.entity.js'];

export function getTypeOrmOptions(
  configService: ConfigService,
): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host: configService.getOrThrow<string>(`${DATABASE_CONFIG_KEY}.host`),
    port: configService.getOrThrow<number>(`${DATABASE_CONFIG_KEY}.port`),
    username: configService.getOrThrow<string>(`${DATABASE_CONFIG_KEY}.username`),
    password: configService.getOrThrow<string>(`${DATABASE_CONFIG_KEY}.password`),
    database: configService.getOrThrow<string>(`${DATABASE_CONFIG_KEY}.name`),
    schema: configService.getOrThrow<string>(`${DATABASE_CONFIG_KEY}.schema`),
    ssl: configService.get<boolean>(`${DATABASE_CONFIG_KEY}.ssl`) || false,
    autoLoadEntities: true,
    entities: ENTITIES_GLOB,
    migrations: MIGRATIONS_GLOB,
    migrationsTableName: 'typeorm_migrations',
    synchronize: false,
  };
}

export function getDataSourceOptions(): DataSourceOptions {
  const config = databaseConfig();

  return {
    type: 'postgres',
    host: config.host,
    port: config.port,
    username: config.username,
    password: config.password,
    database: config.name,
    schema: config.schema,
    ssl: config.ssl,
    entities: ['src/**/*.entity.ts', 'dist/**/*.entity.js'],
    migrations: ['src/database/migrations/*.ts', 'dist/database/migrations/*.js'],
    migrationsTableName: 'typeorm_migrations',
    synchronize: false,
  };
}
