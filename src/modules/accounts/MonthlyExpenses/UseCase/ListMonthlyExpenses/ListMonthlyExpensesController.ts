import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListMonthlyExpensesUseCase } from './ListMonthlyExpensesUseCase';

class ListMonthlyExpensesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listMonthlyExpensesUseCase = container.resolve(
      ListMonthlyExpensesUseCase,
    );
    const allExpenses = await listMonthlyExpensesUseCase.execute();
    return response.json(allExpenses);
  }
}

export { ListMonthlyExpensesController };
