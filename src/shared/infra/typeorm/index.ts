import { Login } from '@modules/Users/infra/typeorm/entities/Login';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { DataUsers } from '@modules/Users/infra/typeorm/entities/Datauser';
import { FixedAccounts } from '@modules/accounts/FixedAccounts/infra/typeorm/entities/fixedAccounts';
import { MonthlyIncome } from '@modules/accounts/MonthlyIncome/infra/typeorm/entities/MonthlyIncome';
import { MonthlyExpenses } from '@modules/accounts/MonthlyExpenses/infra/entities/MonthlyExpenses';
dotenv.config();

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  //connectTimeoutMS: 300,
  useUTC: true,
  entities: [Login, DataUsers, FixedAccounts, MonthlyIncome, MonthlyExpenses],
  migrations: ['./dist/shared/infra/typeorm/migrations/*.js'],
  //poolErrorHandler: warn,
});
