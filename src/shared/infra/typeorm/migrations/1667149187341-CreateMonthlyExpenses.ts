import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMonthlyExpenses1667149187341 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'MonthlyExpenses',
        columns: [
          {
            name: 'monthlyExpensesId',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'fixedAccountsId',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'loginId',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'monthReference',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'nameAccount',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'descriptionAcoount',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'dateExpense',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'expenseAmount',
            type: 'numeric',
            isNullable: false,
          },
          {
            name: 'amountInInstallment',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            //Nome da FK//
            name: 'FKLoginMonthlyExpense',
            //Tabela referenciada//
            referencedTableName: 'Login',
            //referencia da coluna id da table referenciada//
            referencedColumnNames: ['loginId'],
            //Coluna da table que recebera o id da table referenciada//
            columnNames: ['loginId'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            //Nome da FK//
            name: 'FKFixedAccountMonthlyExpense',
            //Tabela referenciada//
            referencedTableName: 'FixedAccounts',
            //referencia da coluna id da table referenciada//
            referencedColumnNames: ['fixedAccountsId'],
            //Coluna da table que recebera o id da table referenciada//
            columnNames: ['fixedAccountsId'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('MonthlyExpenses');
  }
}
