import { dataSource } from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import { ICreateMonthlyExpensesDTO } from '../../dtos/ICreateMonthlyExpensesDTO';
import { IMonthlyExpensesRepository } from '../../repositories/IMonthlyExpensesRepository';
import { MonthlyExpenses } from '../entities/MonthlyExpenses';

class MonthlyExpensesRepositories implements IMonthlyExpensesRepository {
  private respositories: Repository<MonthlyExpenses>;

  constructor() {
    this.respositories = dataSource.getRepository(MonthlyExpenses);
  }
  async create({
    fixedAccountsId,
    loginId,
    monthReference,
    nameAccount,
    descriptionAcoount,
    dateExpense,
    expenseAmount,
    amountInInstallment,
  }: ICreateMonthlyExpensesDTO): Promise<MonthlyExpenses> {
    const monthlyExpensesValues = this.respositories.create({
      fixedAccountsId,
      loginId,
      monthReference,
      nameAccount,
      descriptionAcoount,
      dateExpense,
      expenseAmount,
      amountInInstallment,
    });
    await this.respositories.save(monthlyExpensesValues);
    return monthlyExpensesValues;
  }

  async fingByNameMonthlyExpenses(name: string): Promise<MonthlyExpenses> {
    const findByNameAccount = await this.respositories.findOneBy({
      nameAccount: name,
    });
    return findByNameAccount;
  }

  async FindById(id: string): Promise<MonthlyExpenses> {
    const findId = await this.respositories.findOneBy({
      monthlyExpensesId: id,
    });
    return findId;
  }

  async listMonthlyExpenses(): Promise<MonthlyExpenses[]> {
    const listMonthlyAccounts = await this.respositories.find();
    return listMonthlyAccounts;
  }
}

export { MonthlyExpensesRepositories };
