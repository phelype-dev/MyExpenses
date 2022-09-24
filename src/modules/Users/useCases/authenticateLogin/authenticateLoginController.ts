import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateLoginUseCase } from './authenticatorLoginUseCase';

class AuthenticateLoginController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const authenticateLoginUseCase = container.resolve(
      AuthenticateLoginUseCase,
    );

    const token = await authenticateLoginUseCase.execute({
      password,
      email,
    });

    return response.json(token);
  }
}

export { AuthenticateLoginController };
