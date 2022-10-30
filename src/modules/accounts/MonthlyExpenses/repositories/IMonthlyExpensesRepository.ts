import { ICreateMonthlyExpensesDTO } from '../dtos/ICreateMonthlyExpensesDTO';
import { MonthlyExpenses } from '../infra/typeorm/entities/MonthlyExpenses';

interface IMonthlyExpensesRepository {
  create(data: ICreateMonthlyExpensesDTO): Promise<MonthlyExpenses>;
  fingByNameMonthlyExpenses(name: string): Promise<MonthlyExpenses>;
  FindById(id: string): Promise<MonthlyExpenses>;
  listMonthlyExpenses(): Promise<MonthlyExpenses[]>;
}
export { IMonthlyExpensesRepository };
