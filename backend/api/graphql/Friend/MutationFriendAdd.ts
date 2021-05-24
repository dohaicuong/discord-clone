import { extendType, inputObjectType, nonNull, objectType } from "nexus";

export const FriendAddInput = inputObjectType({
  name: 'FriendAddInput',
  definition: t => {
    t.nonNull.relayId('friendId')
  }
})
export const FriendAddPayload = objectType({
  name: 'FriendAddPayload',
  definition: t => {
    t.field('user', { type: 'User' })
    t.field('friend', { type: 'User' })
  }
})
export const FriendAddMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('friendAdd', {
      type: 'FriendAddPayload',
      args: {
        input: nonNull('FriendAddInput'),
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
                connect: {
                  id: input.friendId
                }
              }
            }
          }),
          ctx.prisma.user.update({
            where: { id: input.friendId },
            data: {
              friends: {
                connect: {
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