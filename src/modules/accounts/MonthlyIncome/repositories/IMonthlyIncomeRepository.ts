import { ICreateMonthlyIncomeDTO } from '../dtos/ICreateMonthlyIncomeDTO';
import { MonthlyIncome } from '../infra/typeorm/entities/MonthlyIncome';

interface IMonthlyIncomeRepository {
  create(data: ICreateMonthlyIncomeDTO): Promise<MonthlyIncome>;
}

export { IMonthlyIncomeRepository };
