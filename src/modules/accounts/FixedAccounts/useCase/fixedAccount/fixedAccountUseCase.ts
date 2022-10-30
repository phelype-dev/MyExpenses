import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { IFixedAccountsRepository } from '../../repositories/IFixedAccountsRepository';
import { FixedAccounts } from '../../infra/typeorm/entities/fixedAccounts';
import { ILoginsRepository } from '@modules/Users/repositories/ILoginRepository';

dayjs.extend(utc);
dayjs.locale('pt-BR');

interface IRequest {
  loginId: string;
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

    @inject('LoginRepository')
    private loginRepository: ILoginsRepository,

    @inject('DayJsDateProvider')
    private dateProvider: IDateProvider,
  ) {}

  async execute({
    nameAccount,
    descriptionAcoount,
    accountValues,
    initialDate,
    finalDate,
    isActive,
    loginId,
  }: IRequest): Promise<FixedAccounts> {
    const nameAccountAlreadyExists =
      await this.fixedAccounts.findByFixedAccountName(nameAccount);

    if (nameAccountAlreadyExists) {
      throw new AppError('An account with name already exists');
    }

    const initialDateConverted =
      this.dateProvider.convertToTimestamp(initialDate);
    const finalDateConverted = this.dateProvider.convertToTimestamp(finalDate);

    const dateInvalid =
      this.dateProvider.VerifyDateToDate(initialDateConverted);

    const stardDateAndEndDate = this.dateProvider.CheckStartDateAndEndDate(
      initialDateConverted,
      finalDateConverted,
    );

    if (dateInvalid === false) {
      throw new AppError('Date cannot be less than the current date');
    }

    if (stardDateAndEndDate === false) {
      throw new AppError('End date cannot be less than start date');
    }

    const fixedAccounts = await this.fixedAccounts.create({
      loginId,
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
