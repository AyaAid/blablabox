import { Module } from '@nestjs/common'
import knex from 'knex'
import knexConfig from './knexfile'

export const SqlConnection = Symbol('SqlConnection')

@Module({
    providers: [
        {
            provide: SqlConnection,
            useFactory() {
                return knex(
                    process.env.NODE_ENV == 'production'
                        ? knexConfig.production
                        : knexConfig.development
                )
            },
        },
    ],
    exports: [SqlConnection],
})
export class DatabaseModule {}
