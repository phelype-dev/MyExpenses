import { Column, CreateDateColumn, PrimaryColumn } from 'typeorm';

class MonthlyIncome {
  @PrimaryColumn()
  monthlyIncomeId: string;

  @Column()
  userDataId: string;

  @Column('numeric', {
    precision: 7,
    scale: 2,
  })
  valueIcome: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export { MonthlyIncome };
