import {
    FriendRequestAcceptedEvent,
    FriendRequestSentEvent,
} from '@app/chat/write/domain'
import { MessageSentEvent } from '@app/chat/write/domain/message/message.events'
import { AuthUser, User } from '@app/iam'
import { Controller, MessageEvent, Res, Sse } from '@nestjs/common'
import { EventEmitter2 } from '@nestjs/event-emitter'
import { ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import { Subject } from 'rxjs'
import {
    NotifyFriendRequestAcceptedHandler,
    NotifyFriendRequestReceivedHandler,
    NotifyMessageSent,
} from '../../use-cases'
import { SSEFriendRequestNotifier } from '../friend-request-notifiers/sse-friend-request-notifier'
import { SSEMessageNotifier } from '../message-notifiers'

@Controller('notifications')
@ApiTags('Notifications')
export class NotificationsController {
    constructor(
        private eventBus: EventEmitter2,
        private notifyMessageSent: NotifyMessageSent,
        private notifyFriendRequestSent: NotifyFriendRequestReceivedHandler,
        private notifyFriendRequestAccepted: NotifyFriendRequestAcceptedHandler
    ) {}

    @Sse('')
    async notify(@User() user: AuthUser, @Res() res: Response) {
        const subject = new Subject<MessageEvent>()

        const listenerRemoveCallbacks = [
            this.handleMessageSentEvent(subject, user.id),
            this.handleFriendRequestSentEvent(subject, user.id),
            this.handleFriendRequestAcceptedEvent(subject, user.id),
        ]

        res.once('close', () => {
            listenerRemoveCallbacks.forEach((removeCallback) =>
                removeCallback()
            )
        })

        return subject
    }

    private handleMessageSentEvent(
        subject: Subject<MessageEvent>,
        userId: string
    ) {
        const listener = async (event: MessageSentEvent) => {
            await this.notifyMessageSent.execute({
                event,
                userId,
                notifier: new SSEMessageNotifier(subject),
            })
        }

        this.eventBus.on(MessageSentEvent.name, listener)

        return () => {
            this.eventBus.off(MessageSentEvent.name, listener)
        }
    }

    private handleFriendRequestSentEvent(
        subject: Subject<MessageEvent>,
        userId: string
    ) {
        const listener = async (event: FriendRequestSentEvent) => {
            await this.notifyFriendRequestSent.execute({
                event,
                userId,
                notifier: new SSEFriendRequestNotifier(subject),
            })
        }

        this.eventBus.on(FriendRequestSentEvent.name, listener)

        return () => {
            this.eventBus.off(FriendRequestSentEvent.name, listener)
        }
    }

    private handleFriendRequestAcceptedEvent(
        subject: Subject<MessageEvent>,
        userId: string
    ) {
        const listener = async (event: FriendRequestAcceptedEvent) => {
            await this.notifyFriendRequestAccepted.execute({
                event,
                userId,
                notifier: new SSEFriendRequestNotifier(subject),
            })
        }

        this.eventBus.on(FriendRequestAcceptedEvent.name, listener)

        return () => {
            this.eventBus.off(FriendRequestAcceptedEvent.name, listener)
        }
    }
}
