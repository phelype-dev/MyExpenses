import { dataSource } from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import { DataUsers } from '../entities/Datauser';
import { ICreateDataUsersDTO } from '@modules/Users/dtos/ICreateDataUsersDTO';
import { IDataUserRepository } from '@modules/Users/repositories/IDataUserRepository';

class DataUsersRepositories implements IDataUserRepository {
  //
  private repositories: Repository<DataUsers>;

  constructor() {
    this.repositories = dataSource.getRepository(DataUsers);
  }

  async create({
    loginId,
    firstName,
    lastName,
    birthDate,
    cellNumber,
  }: ICreateDataUsersDTO): Promise<DataUsers> {
    const user = this.repositories.create({
      loginId,
      firstName,
      lastName,
      birthDate,
      cellNumber,
    });
    await this.repositories.save(user);
    return user;
  }

  async findById(id: string): Promise<DataUsers> {
    const userData = await this.repositories.findOneBy({ userDataId: id });
    return userData;
  }

  async findByUserData(name: string): Promise<DataUsers> {
    const userData = await this.repositories.findOneBy({ firstName: name });
    return userData;
  }
}

export { DataUsersRepositories };
