import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('MonthlyIncome')
class MonthlyIncome {
  @PrimaryColumn()
  monthlyIncomeId: string;

  @Column()
  loginId: string;

  @Column('numeric', {
    precision: 7,
    scale: 2,
  })
  valueIncome: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.monthlyIncomeId) {
      this.monthlyIncomeId = uuidv4();
    }
  }
}

export { MonthlyIncome };
