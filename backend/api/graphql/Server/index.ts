export * from './MutationServerCreate'

import { connectionFromPromisedArray } from "graphql-relay";
import { enumType, extendType, objectType } from "nexus";

export const Server = objectType({
  name: 'Server',
  definition: t => {
    t.implements('Node')
    t.nonNull.string('title')
  }
})

export const UserRole = enumType({
  name: 'UserRole',
  members: ['SERVER_OWNER', 'SERVER_BOOSTER', 'OTHER']
})
export const UsersOnServers = objectType({
  name: 'UsersOnServers',
  definition: t => {
    t.implements('Node')
    t.nonNull.field('role', { type: UserRole })
    t.nonNull.string('nickname')
    t.nonNull.field('user', {
      type: 'User',
      // @ts-ignore
      resolve: (userServer, _args, ctx) => {
        return ctx.prisma.user.findUnique({ where: { id: (userServer as any).userId }})
      }
    })
    t.nonNull.field('server', {
      type: 'Server',
      // @ts-ignore
      resolve: (userServer, _args, ctx) => {
        return ctx.prisma.server.findUnique({ where: { id: (userServer as any).serverId }})
      }
    })
  }
})

export const ExtendUser = extendType({
  type: 'User',
  definition: t => {
    t.nonNull.connectionField('userServers', {
      type: 'UsersOnServers',
      // @ts-ignore
      resolve: (user, args, ctx) => {
        return connectionFromPromisedArray(
          ctx.prisma.user
            .findUnique({ where: { id: (user as any).id }})
            .userServers(),
          args
        )
      }
    })
  }
})