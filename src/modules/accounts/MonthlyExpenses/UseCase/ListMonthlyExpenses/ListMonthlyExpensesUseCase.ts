import { inject, injectable } from 'tsyringe';
import { MonthlyExpenses } from '../../infra/entities/MonthlyExpenses';
import { IMonthlyExpensesRepository } from '../../repositories/IMonthlyExpensesRepository';

@injectable()
class ListMonthlyExpensesUseCase {
  constructor(
    @inject('MonthlyExpensesRepositories')
    private monthlyExpenses: IMonthlyExpensesRepository,
  ) {}

  async execute(): Promise<MonthlyExpenses[]> {
    const allExpenses = await this.monthlyExpenses.listMonthlyExpenses();
    return allExpenses;
  }
}

export { ListMonthlyExpensesUseCase };
