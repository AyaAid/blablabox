import { MessageEvent } from '@nestjs/common'
import { Subject } from 'rxjs'
import { Message } from '../../domain'
import { MessageNotifier } from '../../gateways'

export class SSEMessageNotifier implements MessageNotifier {
    constructor(private subject: Subject<MessageEvent>) {}

    async notify(message: Message): Promise<void> {
        this.subject.next({ type: 'message-received', data: message })
    }
}
