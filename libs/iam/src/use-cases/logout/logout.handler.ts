import { AuthProvider } from '@app/iam/gateways'
import { CommandHandler } from '@app/shared'
import { LogoutCommand } from './logout.command'

export class LogoutHandler implements CommandHandler<LogoutCommand> {
    constructor(private authProvider: AuthProvider) {}

    async handle(): Promise<void> {
        await this.authProvider.logout()
    }
}
