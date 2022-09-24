import { ICreateFixedAccountsDTO } from '@modules/accounts/dtos/ICreateFixedAccountsDTO';
import { IFixedAccountsRepository } from '@modules/accounts/repositories/IFixedAccountsRepository';
import { dataSource } from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import { FixedAccounts } from '../entities/fixedAccounts';

class FixedAccountsRepository implements IFixedAccountsRepository {
  private respository: Repository<FixedAccounts>;

  constructor() {
    this.respository = dataSource.getRepository(FixedAccounts);
  }

  async create({
    userDataId,
    nameAccount,
    descriptionAcoount,
    accountValues,
    initialDate,
    finalDate,
  }: ICreateFixedAccountsDTO): Promise<FixedAccounts> {
    const fixedAccounts = this.respository.create({
      userDataId,
      nameAccount,
      descriptionAcoount,
      accountValues,
      initialDate,
      finalDate,
    });
    await this.respository.save(fixedAccounts);
    return fixedAccounts;
  }

  async findByFixedAccountName(name: string): Promise<FixedAccounts> {
    const fixedAccountName = await this.respository.findOneBy({
      nameAccount: name,
    });

    return fixedAccountName;
  }

  async FindById(id: string): Promise<FixedAccounts> {
    const fixedAccountsId = await this.respository.findOneBy({
      fixedAccountsId: id,
    });

    return fixedAccountsId;
  }
  async ListFixedAccounts(): Promise<FixedAccounts[]> {
    const listFixedAccounts = await this.respository.find();
    return listFixedAccounts;
  }
}

export { FixedAccountsRepository };
