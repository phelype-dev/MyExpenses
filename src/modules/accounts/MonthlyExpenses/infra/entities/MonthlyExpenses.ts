import { FixedAccounts } from '@modules/accounts/FixedAccounts/infra/typeorm/entities/fixedAccounts';
import { Login } from '@modules/Users/infra/typeorm/entities/Login';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('MonthlyExpenses')
class MonthlyExpenses {
  @PrimaryColumn()
  monthlyExpensesId: string;

  @ManyToOne(() => FixedAccounts)
  @JoinColumn({ name: 'fixedAccountsId' })
  fixedAccount: FixedAccounts;

  @Column()
  fixedAccountsId: string;

  @ManyToOne(() => Login)
  @JoinColumn({ name: 'loginId' })
  login: Login;

  @Column()
  loginId: string;

  @Column()
  monthReference: number;

  @Column()
  nameAccount: string;

  @Column()
  descriptionAcoount: string;

  @CreateDateColumn()
  dateExpense: Date;

  @Column('numeric', {
    precision: 7,
    scale: 2,
  })
  expenseAmount: number;

  @Column()
  amountInInstallment: boolean;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.monthlyExpensesId) {
      this.monthlyExpensesId = uuidv4();
    }
  }
}

export { MonthlyExpenses };
