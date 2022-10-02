import { ICreateFixedAccountsDTO } from '../dtos/ICreateFixedAccountsDTO';
import { FixedAccounts } from '../infra/typeorm/entities/fixedAccounts';

interface IFixedAccountsRepository {
  create(data: ICreateFixedAccountsDTO): Promise<FixedAccounts>;
  findByFixedAccountName(name: string): Promise<FixedAccounts>;
  FindById(id: string): Promise<FixedAccounts>;
  ListFixedAccounts(): Promise<FixedAccounts[]>;
}

export { IFixedAccountsRepository };
