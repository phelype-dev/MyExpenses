import { Login } from '@modules/Users/infra/typeorm/entities/Login';
import { warn } from 'console';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { DataUsers } from '@modules/Users/infra/typeorm/entities/Datauser';
import { FixedAccounts } from '@modules/accounts/infra/typeorm/entities/fixedAccounts';
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
  entities: [Login, DataUsers, FixedAccounts],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  //poolErrorHandler: warn,
});
