import { AuthUser, User } from '@app/iam'
import { Controller, Get, Inject, Param } from '@nestjs/common'
import { ApiCookieAuth, ApiTags } from '@nestjs/swagger'
import { GetMessagesFromUserQuery } from '../../queries'
import { GetMessagesWithUserParam } from '../params'

@Controller('messages')
@ApiTags('Chat')
@ApiCookieAuth()
export class ReadMessagesController {
    constructor(
        @Inject(GetMessagesFromUserQuery)
        private getMessagesFromUserQuery: GetMessagesFromUserQuery
    ) {}

    @Get(':userId')
    async getMessagesWithUser(
        @User() user: AuthUser,
        @Param() params: GetMessagesWithUserParam
    ) {
        return this.getMessagesFromUserQuery.execute(user.id, params.userId)
    }
}
