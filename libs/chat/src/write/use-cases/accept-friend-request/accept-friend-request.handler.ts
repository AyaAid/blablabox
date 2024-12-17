import { CommandHandler, EventBus } from '@app/shared'
import { DateProvider, UserSocialNotFoundError } from '../../domain'
import { UserSocialRepository } from '../../gateways'
import {
    AcceptFriendRequestCommand,
    AcceptFriendRequestPayload,
} from './accept-friend-request.command'

export class AcceptFriendRequestHandler
    implements CommandHandler<AcceptFriendRequestCommand>
{
    constructor(
        private userSocialRepository: UserSocialRepository,
        private dateProvider: DateProvider,
        private eventBus: EventBus
    ) {}

    async handle(command: AcceptFriendRequestPayload): Promise<void> {
        const user = await this.getUserSocial(command.userId)

        user.acceptFriendRequest(command.requestId, this.dateProvider.getNow())

        await this.userSocialRepository.save(user)
        user.getDomainEvents().forEach((event) => this.eventBus.emit(event))
    }

    private async getUserSocial(userId: string) {
        const user = await this.userSocialRepository.byId(userId)

        if (!user) {
            throw new UserSocialNotFoundError(userId)
        }

        return user
    }
}
