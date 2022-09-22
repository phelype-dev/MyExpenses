import { DataUsers } from '@modules/accounts/infra/typeorm/entities/Datauser';
import { IDataUserRepository } from '@modules/accounts/repositories/IDataUserRepository';
import { ILoginsRepository } from '@modules/accounts/repositories/ILoginRepository';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IRequest } from './IRequest';

@injectable()
class CreateDataUsersUseCase {
  constructor(
    @inject('DataUsersRepositories')
    private dataUsersRepositories: IDataUserRepository,

    @inject('DayJsDateProvider')
    private dateProvider: IDateProvider,

    @inject('LoginRepository')
    private loginRepository: ILoginsRepository,
  ) {}

  async execute({
    loginId,
    firstName,
    lastName,
    birthDate,
    cellNumber,
  }: IRequest): Promise<DataUsers> {
    const loginIdAlreadyExists = await this.loginRepository.findById(loginId);

    if (!loginIdAlreadyExists) {
      throw new AppError('Access Denied, Check Data and Try Again', 403);
    }

    if (loginIdAlreadyExists.loginId != loginId) {
      throw new AppError('Access Denied, Check Data and Try Again', 403);
    }

    const dateConverter = this.dateProvider.convertToUTC(birthDate);
    const user = await this.dataUsersRepositories.create({
      loginId,
      firstName,
      lastName,
      birthDate: dateConverter,
      cellNumber,
    });

    return user;
  }
}

export { CreateDataUsersUseCase };
