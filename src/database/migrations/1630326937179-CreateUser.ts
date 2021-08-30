import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1630326937179 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "password",
                        type: "varchar"
                    },
                    {
                        name: "profile_id",
                        type: "uuid"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKProfile",
                        referencedTableName: 'profile',
                        referencedColumnNames: ['id'],
                        columnNames: ['profile_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user");
    }

}
