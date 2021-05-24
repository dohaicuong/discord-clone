import { extendType, inputObjectType, nonNull, objectType } from 'nexus'

export const ChannelCreateInput = inputObjectType({
  name: 'ChannelCreateInput',
  definition: t => {
    t.nonNull.relayId('channelCategoryId')
    t.nonNull.string('name')
  }
})
export const ChannelCreatePayload = objectType({
  name: 'ChannelCreatePayload',
  definition: t => {
    t.nonNull.field('channel', { type: 'Channel' })
  }
})
export const ChannelCreateMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('channelCreate', {
      args: { input: nonNull('ChannelCreateInput') },
      type: 'ChannelCreatePayload',
      resolve: async (_, { input }, ctx) => {
        const server = await ctx.prisma.channelCategory.findUnique({
          where: { id: input.channelCategoryId }
        }).server()
        if(!server) throw new Error('Something wrong please try again!')

        const isServerOwner = !ctx.userId ? null : await ctx.prisma.usersOnServers.findUnique({
          where: {
            userId_serverId: {
              userId: ctx.userId,
              serverId: server?.id
            }
          }
        }).then(userOnServer => userOnServer?.role === 'SERVER_OWNER')
        if(!isServerOwner) throw new Error('Unauthorized')

        const channel = await ctx.prisma.channel.create({
          data: {
            channelCategoryId: input.channelCategoryId,
            name: input.name
          }
        })

        return {
          channel
        }
      }
    })
  }
})