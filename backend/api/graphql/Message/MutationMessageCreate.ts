import { extendType, inputObjectType, nonNull, objectType } from "nexus";

export const MessageCreateInput = inputObjectType({
  name: 'MessageCreateInput',
  definition: t => {
    t.nonNull.relayId('channelId')
    t.nonNull.string('content')
  }
})
export const MessageCreatePayload = objectType({
  name: 'MessageCreatePayload',
  definition: t => {
    t.nonNull.field('message', { type: 'Message' })
  }
})
export const MessageCreateMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('messageCreate', {
      args: { input: nonNull(MessageCreateInput) },
      type: MessageCreatePayload,
      resolve: async (_, { input }, ctx) => {
        if(!ctx.userId) throw new Error('Please login')

        const isInServer = await ctx.prisma
          .channel.findUnique({ where: { id: input.channelId }})
          .channelCategory()
          .server()
          .serverUsers({ where: { userId: ctx.userId } })
        if(!isInServer) throw new Error('Unauthorized')

        const message = await ctx.prisma.message.create({
          data: {
            userId: ctx.userId,
            channelId: input.channelId,
            content: input.content,
          }
        })
        ctx.pubsub.publish({
          topic: 'MESSAGE_CREATED',
          payload: {
            messageCreated: message
          }
        })

        return {
          message
        }
      }
    })
  }
})