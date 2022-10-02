import { DataUsers } from '@modules/Users/infra/typeorm/entities/Datauser';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('FixedAccounts')
class FixedAccounts {
  @PrimaryColumn()
  fixedAccountsId: string;

  @ManyToOne(() => DataUsers)
  @JoinColumn({ name: 'userDataId' })
  dataUser: DataUsers;

  @Column()
  userDataId: string;

  @Column()
  nameAccount: string;

  @Column()
  descriptionAcoount: string;

  @Column('numeric', {
    precision: 7,
    scale: 2,
  })
  accountValues: number;

  @CreateDateColumn()
  initialDate: Date;

  @CreateDateColumn()
  finalDate: Date;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.fixedAccountsId) {
      this.fixedAccountsId = uuidv4();
    }
  }
}

export { FixedAccounts };
