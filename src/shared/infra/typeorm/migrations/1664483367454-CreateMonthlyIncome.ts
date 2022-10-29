import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMonthlyIncome1664483367454 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'MonthlyIncome',
        columns: [
          {
            name: 'monthlyIncomeId',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'loginId',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'valueIncome',
            type: 'numeric',
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
            name: 'FKLoginMonthlyIncome',
            //Tabela referenciada//
            referencedTableName: 'Login',
            //referencia da coluna id da table referenciada//
            referencedColumnNames: ['loginId'],
            //Coluna da table que recebera o id da table referenciada//
            columnNames: ['loginId'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('MonthlyIncome');
  }
}
