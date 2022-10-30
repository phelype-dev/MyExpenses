import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FixedAccountUseCase } from './fixedAccountUseCase';

class FixedAccountController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      nameAccount,
      descriptionAcoount,
      accountValues,
      initialDate,
      finalDate,
      isActive,
    } = request.body;
    const { loginId } = request.login;

    const fixedAccountUseCase = container.resolve(FixedAccountUseCase);

    const fixedAccount = await fixedAccountUseCase.execute({
      loginId: loginId,
      nameAccount,
      descriptionAcoount,
      accountValues,
      initialDate,
      finalDate,
      isActive,
    });

    return response.status(201).json(fixedAccount);
  }
}

export { FixedAccountController };
