import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumnsFixedAccounts1664482343238
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'FixedAccounts',
      new TableColumn({
        name: 'isActive',
        type: 'boolean',
        default: true,
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('FixedAccounts', 'isActive');
  }
}
