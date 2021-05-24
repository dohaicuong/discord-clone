import { extendType, inputObjectType, nonNull, objectType } from "nexus"

export const FriendRemoveInput = inputObjectType({
  name: 'FriendRemoveInput',
  definition: t => {
    t.nonNull.relayId('friendId')
  }
})
export const FriendRemovePayload = objectType({
  name: 'FriendRemovePayload',
  definition: t => {
    t.field('user', { type: 'User' })
    t.field('friend', { type: 'User' })
  }
})
export const FriendRemoveMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('friendRemove', {
      type: 'FriendAddPayload',
      args: {
        input: nonNull('FriendRemoveInput'),
      },
      resolve: async (_, { input }, ctx) => {
        if(!ctx.userId) throw new Error('Please login!')

        const isUserExist = ctx.prisma.user.findUnique({ where: { id: ctx.userId }})
        if(!isUserExist) throw new Error('Please login!')

        const isFriendExist = ctx.prisma.user.findUnique({ where: { id: input.friendId }})
        if(!isFriendExist) throw new Error('User is not existed!')

        const [user, friend] = await ctx.prisma.$transaction([
          ctx.prisma.user.update({
            where: { id: ctx.userId },
            data: {
              friends: {
                disconnect: {
                  id: input.friendId
                }
              }
            }
          }),
          ctx.prisma.user.update({
            where: { id: input.friendId },
            data: {
              friends: {
                disconnect: {
                  id: ctx.userId
                }
              }
            }
          })
        ])

        return {
          user,
          friend,
        }
      }
    })
  }
})