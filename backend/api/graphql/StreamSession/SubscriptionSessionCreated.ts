import { extendType, inputObjectType, objectType } from "nexus";

export const SessionCreatedSubscriptionFilters = inputObjectType({
  name: 'SessionCreatedSubscriptionFilters',
  definition: t => {
    t.relayId('channelId')
  }
})
export const SessionCreatedSubscriptionPayload = objectType({
  name: 'SessionCreatedSubscriptionPayload',
  definition: t => {
    t.nonNull.field('streamSession', { type: 'StreamSession' })
  }
})
export const SessionCreatedSubscription = extendType({
  type: 'Subscription',
  definition: t => {
    t.field('streamSessionCreated', {
      type: 'SessionCreatedSubscriptionPayload',
      args: {
        filters: 'SessionCreatedSubscriptionFilters'
      },
      subscribe: (_, __, ctx) => ctx.pubsub.subscribe('STREAM_SESSION_CREATED'),
      resolve: (payload, { filters }) => {
        if(
          filters?.channelId
          && filters?.channelId !== (payload as any).channelId
        ) {
          return null
        }

        return {
          streamSession: (payload as any).streamSession
        }
      },
    })
  }
})