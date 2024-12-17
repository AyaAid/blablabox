import { FriendRequestSentEvent } from '@app/chat/write/domain'
import { Fixture, createFixture } from '../../__tests__'
import { StubFriendRequestNotifier } from '../../infra'
import { NotifyFriendRequestReceivedHandler } from './notify-friend-request-received.handler'

describe('Feature: Notify Friend Request Received', () => {
    let fixture: Fixture

    beforeEach(() => {
        fixture = createFixture()
    })

    test('User is notified when friend request is received', async () => {
        await fixture.whenNotifyFriendRequestReceived({
            event: new FriendRequestSentEvent({
                id: 'request-id',
                receiverId: 'receiver-id',
                senderId: 'sender-id',
                requestedAt: new Date('2021-01-01'),
            }),
            userId: 'receiver-id',
        })

        fixture.thenLastFriendRequestReceivedShouldBe({
            id: 'request-id',
            senderId: 'sender-id',
            requestedAt: new Date('2021-01-01'),
        })
    })

    test('User is not notified when friend request is received by another user', async () => {
        await fixture.whenNotifyFriendRequestReceived({
            event: new FriendRequestSentEvent({
                id: 'request-id',
                receiverId: 'another-receiver-id',
                senderId: 'sender-id',
                requestedAt: new Date('2021-01-01'),
            }),
            userId: 'receiver-id',
        })

        fixture.thenLastFriendRequestReceivedShouldBe(undefined)
    })
})
