import { inject, injectable } from 'tsyringe';
import { MonthlyExpenses } from '../infra/entities/MonthlyExpenses';
import { IMonthlyExpensesRepository } from '../repositories/IMonthlyExpensesRepository';

interface IRequest {
  fixedAccountsId: string;
  loginId: string;
  monthReference: number;
  nameAccount: string;
  descriptionAcoount: string;
  dateExpense: Date;
  expenseAmount: number;
  amountInInstallment: boolean;
}

@injectable()
class MonthlyExpensesUseCase {
  constructor(
    @inject('MonthlyExpensesRepositories')
    private monthlyExpenses: IMonthlyExpensesRepository,
  ) {}

  async execute({
    fixedAccountsId,
    loginId,
    monthReference,
    nameAccount,
    descriptionAcoount,
    dateExpense,
    expenseAmount,
    amountInInstallment,
  }: IRequest): Promise<MonthlyExpenses> {
    const monthlyExpensesValues = await this.monthlyExpenses.create({
      fixedAccountsId,
      loginId,
      monthReference,
      nameAccount,
      descriptionAcoount,
      dateExpense,
      expenseAmount,
      amountInInstallment,
    });
    return monthlyExpensesValues;
  }
}

export { MonthlyExpensesUseCase };
