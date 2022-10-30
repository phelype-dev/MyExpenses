import { v4 as uuidv4 } from 'uuid';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Login')
class Login {
  @PrimaryColumn()
  loginId: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  userActive: boolean;

  @CreateDateColumn({ type: 'timestamptz', precision: -3 })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: Date;
  static loginId: string;

  constructor() {
    if (!this.loginId) {
      this.loginId = uuidv4();
    }
  }
}

export { Login };
