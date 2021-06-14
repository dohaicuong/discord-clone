import { extendType, inputObjectType, nonNull, objectType } from "nexus"

export const ServerInviteUserInput = inputObjectType({
  name: 'ServerInviteUserInput',
  definition: t => {
    t.nonNull.relayId('serverId')
    t.nonNull.relayId('userId')
  }
})
export const ServerInviteUserPayload = objectType({
  name: 'ServerInviteUserPayload',
  definition: t => {
    // t.field('server', { type: 'Server' })
    t.field('userServer', { type: 'UsersOnServers' })
  }
})
export const ServerInviteUserMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('serverInviteUser', {
      description: 'Server Owner invite user',
      type: nonNull('ServerInviteUserPayload'),
      args: {
        input: nonNull('ServerInviteUserInput')
      },
      resolve: async (_, { input }, ctx) => {
        if(!ctx.userId) throw new Error('Please login')

        const ctxUserInServer = await ctx.prisma
          .server.findUnique({ where: { id: input.serverId } })
          .serverUsers({ where: { userId: ctx.userId }})
          .then(res => res?.[0])
        if(ctxUserInServer.role !== 'SERVER_OWNER') throw new Error('Unauthorized')
        
        const invitingUser = await ctx.prisma.user.findUnique({ where: { id: input.userId }})
        if(!invitingUser) throw new Error('Inviting user is not existed')

        const userServer = await ctx.prisma.usersOnServers.create({
          data: {
            serverId: input.serverId,
            userId: input.userId,
            role: 'OTHER',
            nickname: invitingUser?.username,
          }
        })

        return {
          userServer
        }
      }
    })
  }
})