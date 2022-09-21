import { DataUsersRepositories } from '@modules/accounts/infra/typeorm/repositories/DataUsersRepositories';
import { LoginRepository } from '@modules/accounts/infra/typeorm/repositories/LoginRespository';
import { IDataUserRepository } from '@modules/accounts/repositories/IDataUserRepository';
import { ILoginsRepository } from '@modules/accounts/repositories/ILoginRepository';
import { container } from 'tsyringe';

container.registerSingleton<ILoginsRepository>(
  'LoginRepository',
  LoginRepository,
);

container.registerSingleton<IDataUserRepository>(
  'DataUsersRepositories',
  DataUsersRepositories,
);
