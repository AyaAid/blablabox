import {
    ChatterNotFoundError,
    ChatterNotFriendWithReceiverError,
    MessageAlreadyDeletedError,
    MessageNotFoundError,
    MessageWasNotSentByChatterError,
} from '@app/chat/write/domain'
import {
    DeleteDirectMessageHandler,
    SendDirectMessageHandler,
} from '@app/chat/write/use-cases'
import { AuthUser, User } from '@app/iam'
import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    NotFoundException,
    Param,
    Post,
} from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { SendDirectMessageBody } from '../body'
import { DeleteMessageParams, SendMessageParams } from '../params'

@ApiTags('Chat')
@Controller('chat')
@ApiBearerAuth()
export class ChatController {
    constructor(
        private sendDirectMessageHandler: SendDirectMessageHandler,
        private deleteMessageHandler: DeleteDirectMessageHandler
    ) {}

    @Post('/:messageId/send')
    async sendMessage(
        @Body() payload: SendDirectMessageBody,
        @Param() params: SendMessageParams,
        @User() user: AuthUser
    ) {
        try {
            await this.sendDirectMessageHandler.handle({
                messageId: params.messageId,
                emitterId: user.id,
                receiverId: payload.receiverId,
                content: payload.content,
            })
        } catch (error) {
            if (error instanceof ChatterNotFoundError)
                throw new NotFoundException(error.message)
            if (error instanceof ChatterNotFriendWithReceiverError)
                throw new BadRequestException(error.message)
            throw error
        }
    }

    @Delete('/:messageId')
    async deleteMessage(
        @Param() params: DeleteMessageParams,
        @User() user: AuthUser
    ) {
        try {
            await this.deleteMessageHandler.handle({
                id: params.messageId,
                chatterId: user.id,
            })
        } catch (error) {
            if (error instanceof ChatterNotFoundError)
                throw new NotFoundException(error.message)
            if (error instanceof MessageNotFoundError)
                throw new NotFoundException(error.message)
            if (error instanceof MessageWasNotSentByChatterError)
                throw new BadRequestException(error.message)
            if (error instanceof MessageAlreadyDeletedError)
                throw new BadRequestException(error.message)
            throw error
        }
    }
}
