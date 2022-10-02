import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FixedAccountUseCase } from './fixedAccountUseCase';

class FixedAccountController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      userDataId,
      nameAccount,
      descriptionAcoount,
      accountValues,
      initialDate,
      finalDate,
      isActive,
    } = request.body;

    const fixedAccountUseCase = container.resolve(FixedAccountUseCase);

    const fixedAccount = await fixedAccountUseCase.execute({
      userDataId,
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
