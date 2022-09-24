import { ICreateLoginDTO } from '../dtos/ICreateLoginDTO';
import { Login } from '../infra/typeorm/entities/Login';

interface ILoginsRepository {
  create(data: ICreateLoginDTO): Promise<void>;
  findbyEmail(email: string): Promise<Login>;
  findById(loginId: string): Promise<Login>;
}

export { ILoginsRepository };
