import {
    UserSocialAlreadyFriendsError,
    UserSocialAlreadyRequestedError,
    UserSocialFriendRequestNotFound,
    UserSocialNotFoundError,
} from '@app/chat/write/domain'
import {
    AcceptFriendRequestHandler,
    SendFriendRequestHandler,
} from '@app/chat/write/use-cases'
import { AuthUser, User } from '@app/iam'
import {
    BadRequestException,
    Body,
    Controller,
    NotFoundException,
    Param,
    Post,
} from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { SendFriendRequestBody } from '../body'
import { SendFriendRequestParams } from '../params'

@ApiTags('Social')
@Controller('social')
@ApiBearerAuth()
export class SocialController {
    constructor(
        private sendFriendRequestHandler: SendFriendRequestHandler,
        private acceptFriendRequestHandler: AcceptFriendRequestHandler
    ) {}

    @Post('/friend-request/:requestId')
    async sendFriendRequest(
        @Body() body: SendFriendRequestBody,
        @Param() params: SendFriendRequestParams,
        @User() user: AuthUser
    ) {
        try {
            await this.sendFriendRequestHandler.handle({
                requestId: params.requestId,
                senderId: user.id,
                receiverId: body.receiverId,
            })
        } catch (error) {
            if (error instanceof UserSocialNotFoundError)
                throw new NotFoundException(error.message)
            if (error instanceof UserSocialAlreadyFriendsError)
                throw new BadRequestException(error.message)
            if (error instanceof UserSocialAlreadyRequestedError)
                throw new BadRequestException(error.message)

            throw error
        }
    }

    @Post('/friend-request/:requestId/accept')
    async acceptFriendRequest(
        @Param() params: SendFriendRequestParams,
        @User() user: AuthUser
    ) {
        try {
            await this.acceptFriendRequestHandler.handle({
                requestId: params.requestId,
                userId: user.id,
            })
        } catch (error) {
            if (error instanceof UserSocialNotFoundError)
                throw new NotFoundException(error.message)
            if (error instanceof UserSocialFriendRequestNotFound)
                throw new NotFoundException(error.message)
            throw error
        }
    }
}
