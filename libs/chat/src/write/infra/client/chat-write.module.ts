import { Module } from '@nestjs/common'
import { ChatWriteUsecasesModule } from './chat-write-usecases.module'
import { ChatController, SocialController } from './controllers'

@Module({
    imports: [ChatWriteUsecasesModule],
    controllers: [ChatController, SocialController],
})
export class ChatWriteModule {}
