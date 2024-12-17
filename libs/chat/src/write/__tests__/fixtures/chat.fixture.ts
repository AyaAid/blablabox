import { StubEventBus } from '@app/shared'
import { Chatter, DeterministicDateProvider, Message } from '../../domain'
import { MessageSentEvent } from '../../domain/message/message.events'
import {
    InMemoryChatterRepository,
    InMemoryMessageRepository,
} from '../../infra'
import {
    DeleteDirectMessageHandler,
    DeleteDirectMessagePayload,
    SendDirectMessageHandler,
    SendDirectMessagePayload,
} from '../../use-cases'

export const createChatFixture = () => {
    const messageRepository = new InMemoryMessageRepository()
    const chatterRepository = new InMemoryChatterRepository()
    const dateProvider = new DeterministicDateProvider()
    const eventBus = new StubEventBus()
    const sendDirectMessageHandler = new SendDirectMessageHandler(
        messageRepository,
        chatterRepository,
        dateProvider,
        eventBus
    )
    const deleteDirectMessageHandler = new DeleteDirectMessageHandler(
        messageRepository,
        chatterRepository
    )
    let error: Error

    return {
        givenNowIs(now: Date) {
            dateProvider.now = now
        },
        givenChatters(chatters: Chatter[]) {
            chatterRepository.givenChatters(chatters)
        },
        givenMessages(messages: Message[]) {
            messageRepository.givenMessages(messages)
        },
        async whenSendDirectMessage(command: SendDirectMessagePayload) {
            try {
                await sendDirectMessageHandler.handle(command)
            } catch (e) {
                error = e
            }
        },
        async whenDeleteDirectMessage(command: DeleteDirectMessagePayload) {
            try {
                await deleteDirectMessageHandler.handle(command)
            } catch (e) {
                error = e
            }
        },
        thenMessagesShouldBe(messages: Message[]) {
            expect(messageRepository.getAll()).toEqual(
                messages.map((m) => m.snapshot)
            )
        },
        thenErrorShouldBe(expectedError: Error) {
            expect(error).toEqual(expectedError)
        },
        thenShouldHaveEmitMessageSentEvent(event: MessageSentEvent) {
            expect(eventBus.emittedEvent).toEqual(event)
        },
    }
}

export type ChatFixture = ReturnType<typeof createChatFixture>
