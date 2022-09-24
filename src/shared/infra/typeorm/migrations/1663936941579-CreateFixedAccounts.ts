import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFixedAccounts1663936941579 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'FixedAccounts',
        columns: [
          {
            name: 'fixedAccountsId',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'userDataId',
            type: 'uuid',
            isNullable: true,
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
            name: 'accountValues',
            type: 'numeric',
            isNullable: false,
          },
          {
            name: 'initialDate',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'finalDate',
            type: 'timestamp',
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
            name: 'FKUserDataFixedAccount',
            //Tabela referenciada//
            referencedTableName: 'DataUsers',
            //referencia da coluna id da table referenciada//
            referencedColumnNames: ['userDataId'],
            //Coluna da table que recebera o id da table referenciada//
            columnNames: ['userDataId'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('FixedAccounts');
  }
}
