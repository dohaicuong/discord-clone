export * from './MutationChannelCreate'

import { connectionFromPromisedArray } from 'graphql-relay'
import { extendType, objectType, enumType } from 'nexus'

export const ChannelType = enumType({
  name: 'ChannelType',
  members: ['TEXT', 'VOICE'],
})

export const Channel = objectType({
  name: 'Channel',
  definition: t => {
    t.implements('Node')
    t.nonNull.string('name')
    t.nonNull.field('channelType', { type: 'ChannelType' })
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