import { inject, injectable } from 'tsyringe';
import { MonthlyIncome } from '../infra/typeorm/entities/MonthlyIncome';
import { IMonthlyIncomeRepository } from '../repositories/IMonthlyIncomeRepository';

interface IRequest {
  loginId: string;
  valueIncome: number;
}

@injectable()
class MonthlyIncomeUseCase {
  constructor(
    @inject('MonthlyIncomeRepository')
    private monthlyIncome: IMonthlyIncomeRepository,
  ) {}

  async execute({ loginId, valueIncome }: IRequest): Promise<MonthlyIncome> {
    const monthlyIncomeValues = await this.monthlyIncome.create({
      loginId,
      valueIncome,
    });
    return monthlyIncomeValues;
  }
}

export { MonthlyIncomeUseCase };
