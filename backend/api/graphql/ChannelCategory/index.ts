export * from './MutationChannelCategoryCreate'

import { connectionFromPromisedArray } from 'graphql-relay'
import { extendType, objectType } from 'nexus'

export const ChannelCategory = objectType({
  name: 'ChannelCategory',
  definition: t => {
    t.implements('Node')
    t.nonNull.string('name')
    t.field('server', { type: 'Server' })
  }
})

export const ServerExtend = extendType({
  type: 'Server',
  definition: t => {
    t.nonNull.connectionField('channelCategories', {
      type: 'ChannelCategory',
      // @ts-ignore
      resolve: (server, args, ctx) => {
        return connectionFromPromisedArray(
          ctx.prisma.server
            .findUnique({ where: { id: (server as any).id }})
            .channelCategories(),
          args
        )
      }
    })
  }
})
