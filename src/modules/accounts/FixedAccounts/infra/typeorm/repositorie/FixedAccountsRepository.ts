import { ICreateFixedAccountsDTO } from '@modules/accounts/FixedAccounts/dtos/ICreateFixedAccountsDTO';
import { IFixedAccountsRepository } from '@modules/accounts/FixedAccounts/repositories/IFixedAccountsRepository';
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
    isActive,
  }: ICreateFixedAccountsDTO): Promise<FixedAccounts> {
    const fixedAccounts = this.respository.create({
      userDataId,
      nameAccount,
      descriptionAcoount,
      accountValues,
      initialDate,
      finalDate,
      isActive,
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
