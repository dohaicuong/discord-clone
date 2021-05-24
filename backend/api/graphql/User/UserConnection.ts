import { connectionFromPromisedArray } from "graphql-relay";
import { extendType } from "nexus";

export const UserConnection = extendType({
  type: 'Query',
  definition: t => {
    t.nonNull.connectionField('users', {
      type: 'User',
      // @ts-ignore
      resolve: (_, args, ctx) => {
        return connectionFromPromisedArray(
          ctx.prisma.user.findMany(),
          args
        )
      }
    })
  }
})