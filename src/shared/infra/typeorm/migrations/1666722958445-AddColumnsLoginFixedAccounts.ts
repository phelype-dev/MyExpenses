import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumnsLoginFixedAccounts1666722958445
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'FixedAccounts',
      new TableColumn({
        name: 'loginId',
        type: 'uuid',
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('FixedAccounts', 'loginId');
  }
}
