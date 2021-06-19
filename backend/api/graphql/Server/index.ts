export * from './MutationServerCreate'
export * from './MutationServerInvite'
export * from './MutationServerJoin'

import { connectionFromPromisedArray } from "graphql-relay";
import { enumType, extendType, inputObjectType, objectType } from "nexus";

export const ServerUsersConnectionFilters = inputObjectType({
  name: 'ServerUsersConnectionFilters',
  definition: t => {
    t.boolean('currentUser')
  }
})
export const Server = objectType({
  name: 'Server',
  definition: t => {
    t.implements('Node')
    t.nonNull.string('title')
    t.media('logo')
    t.nonNull.connectionField('serverUsers', {
      type: 'UsersOnServers',
      additionalArgs: {
        filters: 'ServerUsersConnectionFilters',
      },
      // @ts-ignore
      resolve: (server, { filters, ...args }, ctx) => {
        (ctx as any).serverId = (server as any).id

        return connectionFromPromisedArray(
          ctx.prisma.server
            .findUnique({ where: { id: (server as any).id }})
            .serverUsers({
              where: {
                userId: filters?.currentUser ? (ctx.userId || undefined) : undefined
              }
            }),
          args
        )
      },
      extendConnection: t => {
        t.int('totalCount', {
          resolve: async (connection, args, ctx) => {
            const { serverId } = ctx as any
            const serverUsers = await ctx.prisma.usersOnServers.aggregate({
              count: {
                id: true
              },
              where: {
                serverId,
              },
            })
            return serverUsers.count.id
          }
        })
      }
    })
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