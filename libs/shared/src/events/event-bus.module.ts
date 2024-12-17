import { Global, Module } from '@nestjs/common'
import { EventEmitter2, EventEmitterModule } from '@nestjs/event-emitter'
import { EventBus } from './event-bus'
import { NestEventBus } from './nest-event-bus'

@Global()
@Module({
    imports: [EventEmitterModule.forRoot()],
    providers: [
        {
            provide: EventBus,
            inject: [EventEmitter2],
            useFactory: (eventEmitter2: EventEmitter2) =>
                new NestEventBus(eventEmitter2),
        },
    ],
    exports: [EventBus],
})
export class EventBusModule {}
