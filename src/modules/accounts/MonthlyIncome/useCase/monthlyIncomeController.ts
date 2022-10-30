import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { MonthlyIncomeUseCase } from './monthlyIncomeUseCase';

class MonthlyIncomeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { valueIncome } = request.body;
    const { loginId } = request.login;

    const monthlyIncomeUseCase = container.resolve(MonthlyIncomeUseCase);

    const monthlyIncomeValues = await monthlyIncomeUseCase.execute({
      loginId: loginId,
      valueIncome,
    });

    return response.status(201).json(monthlyIncomeValues);
  }
}

export { MonthlyIncomeController };
