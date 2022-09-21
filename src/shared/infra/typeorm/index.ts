import { Login } from '@modules/accounts/infra/typeorm/entities/Login';
import { warn } from 'console';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { DataUsers } from '@modules/accounts/infra/typeorm/entities/Datauser';
dotenv.config();

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  //connectTimeoutMS: 300,
  useUTC: true,
  entities: [Login, DataUsers],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  //poolErrorHandler: warn,
});
