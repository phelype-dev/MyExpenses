import { DataUsers } from '@modules/accounts/infra/typeorm/entities/Datauser';
import { IDataUserRepository } from '@modules/accounts/repositories/IDataUserRepository';
import { inject, injectable } from 'tsyringe';
import { IRequest } from './IRequest';

@injectable()
class CreateDataUsersUseCase {
  constructor(
    @inject('DataUsersRepositories')
    private dataUsersRepositories: IDataUserRepository,
  ) {}

  async execute({
    loginId,
    firstName,
    lastName,
    birthDate,
    cellNumber,
  }: IRequest): Promise<DataUsers> {
    const user = await this.dataUsersRepositories.create({
      loginId,
      firstName,
      lastName,
      birthDate,
      cellNumber,
    });

    return user;
  }
}

export { CreateDataUsersUseCase };
