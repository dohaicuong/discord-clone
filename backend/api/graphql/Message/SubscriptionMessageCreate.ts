import { extendType } from "nexus";

export const MessageCreateSubscription = extendType({
  type: 'Subscription',
  definition: t => {
    t.field('messageCreated', {
      type: 'Message',
      subscribe: (_, __, ctx) => ctx.pubsub.subscribe('MESSAGE_CREATED'),
      resolve: payload => {
        return (payload as any).messageCreated
      },
    })
  }
})