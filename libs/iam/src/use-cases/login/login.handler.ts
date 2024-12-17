import {
    PasswordHasher,
    UserNotFoundError,
    UserPasswordDoesNotMatchError,
} from '@app/iam/domain'
import { AuthProvider, UserRepository } from '@app/iam/gateways'
import { CommandHandler } from '@app/shared'
import { LoginCommand, LoginPayload } from './login.command'

export class LoginHandler implements CommandHandler<LoginCommand> {
    constructor(
        private userRepository: UserRepository,
        private authProvider: AuthProvider,
        private passwordHasher: PasswordHasher
    ) {}

    async handle(command: LoginPayload): Promise<void> {
        const user = await this.userRepository.getByUsername(command.username)

        if (!user) {
            throw new UserNotFoundError()
        }

        const passwordMatches = this.passwordHasher.compare(
            command.password,
            user.password
        )

        if (!passwordMatches) {
            throw new UserPasswordDoesNotMatchError()
        }

        await this.authProvider.login(user)
    }
}
