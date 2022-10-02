import { FixedAccounts } from '@modules/accounts/infra/typeorm/entities/fixedAccounts';
import { IFixedAccountsRepository } from '@modules/accounts/repositories/IFixedAccountsRepository';
import { IDataUserRepository } from '@modules/Users/repositories/IDataUserRepository';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.locale('pt-BR');

interface IRequest {
  userDataId: string;
  nameAccount: string;
  descriptionAcoount: string;
  accountValues: number;
  initialDate: Date;
  finalDate: Date;
  isActive: boolean;
}

@injectable()
class FixedAccountUseCase {
  constructor(
    @inject('FixedAccountsRepository')
    private fixedAccounts: IFixedAccountsRepository,

    @inject('DataUsersRepositories')
    private userData: IDataUserRepository,

    @inject('DayJsDateProvider')
    private dateProvider: IDateProvider,
  ) {}

  async execute({
    userDataId,
    nameAccount,
    descriptionAcoount,
    accountValues,
    initialDate,
    finalDate,
    isActive,
  }: IRequest): Promise<FixedAccounts> {
    const nameAccountAlreadyExists =
      await this.fixedAccounts.findByFixedAccountName(nameAccount);

    if (nameAccountAlreadyExists) {
      throw new AppError('An account with name already exists');
    }

    const findIdUserData = await this.userData.findById(userDataId);

    const initialDateConverted =
      this.dateProvider.convertToTimestamp(initialDate);

    const finalDateConverted = this.dateProvider.convertToTimestamp(finalDate);

    const fixedAccounts = await this.fixedAccounts.create({
      userDataId: findIdUserData.userDataId,
      nameAccount,
      descriptionAcoount,
      accountValues,
      initialDate: initialDateConverted,
      finalDate: finalDateConverted,
      isActive,
    });

    return fixedAccounts;
  }
}
export { FixedAccountUseCase };
