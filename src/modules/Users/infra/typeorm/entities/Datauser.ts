import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('DataUsers')
class DataUsers {
  @PrimaryColumn()
  userDataId: string;

  @Column()
  loginId: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @CreateDateColumn()
  birthDate: Date;

  @Column()
  cellNumber: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.userDataId) {
      this.userDataId = uuidv4();
    }
  }
}

export { DataUsers };
