export * from './MutationChannelCreate'

import { connectionFromPromisedArray } from 'graphql-relay'
import { extendType, objectType } from 'nexus'

export const Channel = objectType({
  name: 'Channel',
  definition: t => {
    t.implements('Node')
    t.nonNull.string('name')
    t.field('channelCategory', { type: 'ChannelCategory' })
  }
})

export const CategoryExtend = extendType({
  type: 'ChannelCategory',
  definition: t => {
    t.nonNull.connectionField('channels', {
      type: Channel,
      // @ts-ignore
      resolve: (category, args, ctx) => {
        return connectionFromPromisedArray(
          ctx.prisma.channelCategory
            .findUnique({ where: { id: (category as any).id }})
            .channels(),
          args
        )
      }
    })
  }
})