import { FixedAccountsRepository } from '@modules/accounts/FixedAccounts/infra/typeorm/repositorie/FixedAccountsRepository';
import { IFixedAccountsRepository } from '@modules/accounts/FixedAccounts/repositories/IFixedAccountsRepository';
import { DataUsersRepositories } from '@modules/Users/infra/typeorm/repositories/DataUsersRepositories';
import { LoginRepository } from '@modules/Users/infra/typeorm/repositories/LoginRespository';
import { IDataUserRepository } from '@modules/Users/repositories/IDataUserRepository';
import { ILoginsRepository } from '@modules/Users/repositories/ILoginRepository';
import '@shared/container/providers';
import { container } from 'tsyringe';

container.registerSingleton<ILoginsRepository>(
  'LoginRepository',
  LoginRepository,
);

container.registerSingleton<IDataUserRepository>(
  'DataUsersRepositories',
  DataUsersRepositories,
);

container.registerSingleton<IFixedAccountsRepository>(
  'FixedAccountsRepository',
  FixedAccountsRepository,
);
