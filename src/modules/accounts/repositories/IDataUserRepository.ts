import { ICreateDataUsersDTO } from '../dtos/ICreateDataUsersDTO';
import { DataUsers } from '../infra/typeorm/entities/Datauser';

interface IDataUserRepository {
  create(data: ICreateDataUsersDTO): Promise<DataUsers>;
}

export { IDataUserRepository };
