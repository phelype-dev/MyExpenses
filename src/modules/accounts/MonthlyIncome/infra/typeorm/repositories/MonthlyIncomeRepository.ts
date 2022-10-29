import { ICreateMonthlyIncomeDTO } from '@modules/accounts/MonthlyIncome/dtos/ICreateMonthlyIncomeDTO';
import { IMonthlyIncomeRepository } from '@modules/accounts/MonthlyIncome/repositories/IMonthlyIncomeRepository';
import { dataSource } from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import { MonthlyIncome } from '../entities/MonthlyIncome';

class MonthlyIncomeRepository implements IMonthlyIncomeRepository {
  private respository: Repository<MonthlyIncome>;

  constructor() {
    this.respository = dataSource.getRepository(MonthlyIncome);
  }

  async create({
    loginId,
    valueIncome,
  }: ICreateMonthlyIncomeDTO): Promise<MonthlyIncome> {
    const valuesIncomes = this.respository.create({ loginId, valueIncome });
    await this.respository.save(valuesIncomes);
    return valuesIncomes;
  }
}
export { MonthlyIncomeRepository };
