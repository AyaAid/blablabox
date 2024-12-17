import {
    Inject,
    MiddlewareConsumer,
    Module,
    NestModule,
    Scope,
} from '@nestjs/common'
import { APP_GUARD, Reflector } from '@nestjs/core'
import * as session from 'express-session'
import { Store } from 'express-session'
import { AuthProvider } from './gateways'
import { IAMDependenciesModule, SessionsStore } from './iam-dependencies.module'
import { IAMUseCaseModule } from './iam-usecase.modules'
import { AuthController } from './infra'
import { AuthGuard } from './infra/client/guards/auth.guard'

@Module({
    imports: [IAMDependenciesModule, IAMUseCaseModule],
    providers: [
        {
            provide: APP_GUARD,
            inject: [AuthProvider, Reflector],
            useFactory: (authProvider: AuthProvider, reflector: Reflector) =>
                new AuthGuard(authProvider, reflector),
            scope: Scope.REQUEST,
        },
    ],
    controllers: [AuthController],
})
export class IamModule implements NestModule {
    constructor(@Inject(SessionsStore) private readonly store: Store) {}

    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                session({
                    store: this.store,
                    secret: 'keyboard cat',
                    resave: false,
                    saveUninitialized: false,
                    name: 'session',
                    cookie: {
                        httpOnly: true,
                    },
                })
            )
            .forRoutes('*')
    }
}
