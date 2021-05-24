export * from './MutationFriendAdd'
export * from './MutationFriendRemove'

import { connectionFromPromisedArray } from 'graphql-relay'
import { extendType } from 'nexus'

export const UserExtend = extendType({
  type: 'User',
  definition: t => {
    t.nonNull.connectionField('friends', {
      type: 'User',
      // @ts-ignore
      resolve: (user, args, ctx) => {
        return connectionFromPromisedArray(
          ctx.prisma.user
            .findUnique({ where: { id: (user as any).id }})
            .friends(),
          args
        )
      }
    })
  }
})
