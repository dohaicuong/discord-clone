import { extendType, inputObjectType, objectType } from "nexus";

export const MessageCreateSubscriptionFilters = inputObjectType({
  name: 'MessageCreateSubscriptionFilters',
  definition: t => {
    t.relayId('channelId')
  }
})
export const MessageCreateSubscriptionPayload = objectType({
  name: 'MessageCreateSubscriptionPayload',
  definition: t => {
    t.nonNull.field('message', { type: 'Message' })
  }
})
export const MessageCreateSubscription = extendType({
  type: 'Subscription',
  definition: t => {
    t.field('messageCreated', {
      type: 'MessageCreateSubscriptionPayload',
      args: {
        filters: 'MessageCreateSubscriptionFilters'
      },
      subscribe: (_, __, ctx) => ctx.pubsub.subscribe('MESSAGE_CREATED'),
      resolve: (payload, { filters }) => {
        if(
          filters?.channelId
          && filters?.channelId !== (payload as any).channelId
        ) {
          return null
        }

        return {
          message: (payload as any).messageCreated
        }
      },
    })
  }
})