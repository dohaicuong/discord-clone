import { extendType, inputObjectType, nonNull, objectType } from 'nexus'

export const ChannelCategoryCreateInput = inputObjectType({
  name: 'ChannelCategoryCreateInput',
  definition: t => {
    t.nonNull.relayId('serverId')
    t.nonNull.string('name')
  }
})
export const ChannelCategoryCreatePayload = objectType({
  name: 'ChannelCategoryCreatePayload',
  definition: t => {
    t.field('channelCategory', { type: 'ChannelCategory' })
  }
})
export const ChannelCategoryCreateMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('channelCategoryCreate', {
      args: {
        input: nonNull('ChannelCategoryCreateInput')
      },
      type: 'ChannelCategoryCreatePayload',
      resolve: async (_, { input }, ctx) => {
        const isServerOwner = !ctx.userId ? null : await ctx.prisma.usersOnServers.findUnique({
          where: {
            userId_serverId: {
              userId: ctx.userId,
              serverId: input.serverId
            }
          }
        }).then(userOnServer => userOnServer?.role === 'SERVER_OWNER')
        if(!isServerOwner) throw new Error('Unauthorized')

        const channelCategory = await ctx.prisma.channelCategory.create({
          data: {
            serverId: input.serverId,
            name: input.name,
          }
        })

        return {
          channelCategory
        }
      }
    })
  }
})