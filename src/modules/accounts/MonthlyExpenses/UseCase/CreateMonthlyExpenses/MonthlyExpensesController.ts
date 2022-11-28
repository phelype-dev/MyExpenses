import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { MonthlyExpensesUseCase } from './MonthlyExpensesUseCase';

class MonthlyExpensesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { loginId } = request.login;
    const {
      fixedAccountsId,
      monthReference,
      nameAccount,
      descriptionAcoount,
      dateExpense,
      expenseAmount,
      amountInInstallment,
    } = request.body;

    const monthlyExpensesUseCase = container.resolve(MonthlyExpensesUseCase);

    const monthlyExpensesValues = await monthlyExpensesUseCase.execute({
      loginId: loginId,
      fixedAccountsId,
      monthReference,
      nameAccount,
      descriptionAcoount,
      dateExpense,
      expenseAmount,
      amountInInstallment,
    });

    return response.status(201).json(monthlyExpensesValues);
  }
}

export { MonthlyExpensesController };
