import { CommandBus, DatabaseModule, SqlConnection } from '@app/shared'
import { Module } from '@nestjs/common'
import { Knex } from 'knex'
import { DateProvider, IdProvider, PasswordHasher } from './domain'
import { AuthProvider, UserRepository } from './gateways'
import { IAMDependenciesModule } from './iam-dependencies.module'
import { knexGetMeQuery } from './infra'
import { GetMeQuery } from './queries'
import { LoginHandler, LogoutHandler, RegisterHandler } from './use-cases'

@Module({
    imports: [IAMDependenciesModule, DatabaseModule],
    providers: [
        {
            provide: RegisterHandler,
            inject: [
                UserRepository,
                PasswordHasher,
                IdProvider,
                DateProvider,
                AuthProvider,
            ],
            useFactory: (
                userRepository: UserRepository,
                passwordEncryption: PasswordHasher,
                idProvider: IdProvider,
                dateProvider: DateProvider,
                authProvider: AuthProvider
            ) => {
                return new RegisterHandler(
                    userRepository,
                    passwordEncryption,
                    idProvider,
                    dateProvider,
                    authProvider
                )
            },
        },
        {
            provide: LoginHandler,
            inject: [UserRepository, AuthProvider, PasswordHasher, CommandBus],
            useFactory: (
                userRepository: UserRepository,
                authProvider: AuthProvider,
                passwordHasher: PasswordHasher
            ) => {
                return new LoginHandler(
                    userRepository,
                    authProvider,
                    passwordHasher
                )
            },
        },
        {
            provide: LogoutHandler,
            inject: [AuthProvider],
            useFactory: (authProvider: AuthProvider) => {
                return new LogoutHandler(authProvider)
            },
        },
        {
            provide: GetMeQuery,
            inject: [SqlConnection],
            useFactory: (knex: Knex) => {
                return new knexGetMeQuery(knex)
            },
        },
    ],
    exports: [RegisterHandler, LoginHandler, LogoutHandler, GetMeQuery],
})
export class IAMUseCaseModule {}
