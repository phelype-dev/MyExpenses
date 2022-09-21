import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateDataUsersUseCase } from './CreateDataUsersUseCase';

class CreateDataUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { firstName, lastName, birthDate, cellNumber } = request.body;
    const { loginId } = request.login;

    console.log(firstName);

    const createDataUsersUseCase = container.resolve(CreateDataUsersUseCase);

    const user = await createDataUsersUseCase.execute({
      loginId: loginId,
      firstName,
      lastName,
      birthDate,
      cellNumber,
    });

    return response.status(201).json(user);
  }
}

export { CreateDataUsersController };
