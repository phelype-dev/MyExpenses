import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddColumnsRemoveUserDataIdFixedAccounts1666722346813
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "FixedAccounts" DROP COLUMN "userDataId"',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "FixedAccounts" ALTER COLUMN "userDataId" DROP NOT NULL`,
    );
  }
}
