import { ICreateLoginDTO } from '@modules/accounts/dtos/ICreateLoginDTO';
import { ILoginsRepository } from '@modules/accounts/repositories/ILoginRepository';
import { dataSource } from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import { Login } from '../entities/Login';

class LoginRepository implements ILoginsRepository {
  private repository: Repository<Login>;

  constructor() {
    this.repository = dataSource.getRepository(Login);
  }

  async create({
    email,
    password,
    userActive,
  }: ICreateLoginDTO): Promise<void> {
    const dataLogin = this.repository.create({
      email,
      password,
      userActive,
    });
    await this.repository.save(dataLogin);
  }

  async findbyEmail(email: string): Promise<Login> {
    const findEmail = await this.repository.findOneBy({ email });
    return findEmail;
  }

  async findById(loginId: string): Promise<Login> {
    const findById = await this.repository.findOneBy({ loginId: loginId });
    return findById;
  }
}

export { LoginRepository };
