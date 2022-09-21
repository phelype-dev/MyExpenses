import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersData1663765590365 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'DataUsers',
        columns: [
          {
            name: 'userDataId',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'loginId',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'firstName',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'lastName',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'birthDate',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'cellNumber',
            type: 'bigint',
            isNullable: true,
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
            name: 'FKLoginUserData',
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
    await queryRunner.dropTable('DataUsers');
  }
}
