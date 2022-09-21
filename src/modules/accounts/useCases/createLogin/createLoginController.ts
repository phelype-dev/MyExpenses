import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateLoginUseCase } from './createLoginUserCase';

class CreateLoginController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password, userActive } = request.body;
    const createLoginUseCase = container.resolve(CreateLoginUseCase);

    await createLoginUseCase.execute({
      email,
      password,
      userActive,
    });

    return response.status(201).send();
  }
}

export { CreateLoginController };
