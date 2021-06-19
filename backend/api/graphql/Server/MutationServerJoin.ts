import { extendType, inputObjectType, nonNull, objectType } from "nexus"

export const ServerJoinInput = inputObjectType({
  name: 'ServerJoinInput',
  definition: t => {
    t.nonNull.relayId('serverId')
  }
})
export const ServerJoinPayload = objectType({
  name: 'ServerJoinPayload',
  definition: t => {
    t.field('userServer', { type: 'UsersOnServers' })
  }
})
export const ServerJoinMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('serverJoinUser', {
      type: nonNull('ServerJoinPayload'),
      args: {
        input: nonNull('ServerJoinInput')
      },
      resolve: async (_, { input }, ctx) => {
        if(!ctx.userId) throw new Error('Please login')

        const joiningUser = await ctx.prisma.user.findUnique({ where: { id: ctx.userId }})
        if(!joiningUser) throw new Error('Inviting user is not existed')

        try {
          const userServer = await ctx.prisma.usersOnServers.create({
            data: {
              serverId: input.serverId,
              userId: joiningUser.id,
              role: 'OTHER',
              nickname: joiningUser?.username,
            }
          })
  
          return {
            userServer
          }
        }
        catch(error) {
          throw new Error('You are already in the server')
        }
      }
    })
  }
})