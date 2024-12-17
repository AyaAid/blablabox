import {
    UserNotFoundError,
    UserPasswordDoesNotMatchError,
    UsernameAlreadyExistsError,
} from '@app/iam/domain'
import { AuthUser } from '@app/iam/gateways'
import { GetMeQuery } from '@app/iam/queries'
import {
    LoginHandler,
    LogoutHandler,
    RegisterHandler,
} from '@app/iam/use-cases'
import {
    Body,
    ConflictException,
    Controller,
    ForbiddenException,
    Get,
    Inject,
    Post,
    Res,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import { LoginBody, RegisterBody } from '../body'
import { User } from '../decorators'
import { Public } from '../metadata'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(
        private loginHandler: LoginHandler,
        private registerHandler: RegisterHandler,
        private logoutHandler: LogoutHandler,
        @Inject(GetMeQuery)
        private getMeQuery: GetMeQuery
    ) {}

    @Public()
    @Post('login')
    async login(@Body() body: LoginBody) {
        try {
            await this.loginHandler.handle(body)
        } catch (error) {
            if (error instanceof UserPasswordDoesNotMatchError)
                throw new ForbiddenException()
            if (error instanceof UserNotFoundError)
                throw new ForbiddenException()

            throw error
        }
    }

    @Public()
    @Post('logout')
    async logout(@Res() res: Response) {
        await this.logoutHandler.handle()
        res.clearCookie('session')
        res.json()
    }

    @Public()
    @Post('register')
    async register(@Body() body: RegisterBody) {
        try {
            await this.registerHandler.handle(body)
        } catch (error) {
            if (error instanceof UsernameAlreadyExistsError)
                throw new ConflictException(error.message)

            throw error
        }
    }

    @Get('me')
    async me(@User() user: AuthUser) {
        return this.getMeQuery.execute(user.id)
    }
}
