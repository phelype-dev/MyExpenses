import { ICreateLoginDTO } from '@modules/Users/dtos/ICreateLoginDTO';
import { ILoginsRepository } from '@modules/Users/repositories/ILoginRepository';
import { AppError } from '@shared/errors/AppError';
import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateLoginUseCase {
  constructor(
    @inject('LoginRepository')
    private loginsRepository: ILoginsRepository,
  ) {}

  async execute({
    email,
    password,
    userActive,
  }: ICreateLoginDTO): Promise<void> {
    const passwordHash = await hash(password, 8);
    const userAlreadyExists = await this.loginsRepository.findbyEmail(email);

    if (userAlreadyExists) {
      throw new AppError('That username is taken. Try another');
    }

    await this.loginsRepository.create({
      email,
      password: passwordHash,
      userActive,
    });
  }
}
export { CreateLoginUseCase };
