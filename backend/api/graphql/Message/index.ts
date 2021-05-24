export * from './MutationMessageCreate'
export * from './SubscriptionMessageCreate'

import { connectionFromPromisedArray } from "graphql-relay";
import { extendType, objectType } from "nexus";

export const Message = objectType({
  name: 'Message',
  definition: t => {
    t.implements('Node')
    t.nonNull.string('content')
    t.nonNull.datetime('createdAt')
    t.nonNull.datetime('updatedAt')
    t.field('channel', {
      type: 'Channel',
      resolve: (message, __args, ctx) => {
        return ctx.prisma.message.findUnique({
          where: { id: (message as any).id }
        }).channel()
      }
    })
    t.field('author', {
      type: 'User',
      resolve: (message, __args, ctx) => {
        return ctx.prisma.message.findUnique({
          where: { id: (message as any).id }
        }).author()
      }
    })
  }
})

export const ChannelExtend = extendType({
  type: 'Channel',
  definition: t => {
    t.nonNull.connectionField('messages', {
      type: 'Message',
      // @ts-ignore
      resolve: (channel, args, ctx) => {
        return connectionFromPromisedArray(
          ctx.prisma.channel
            .findUnique({ where: { id: (channel as any).id }})
            .mesasges(),
          args
        )
      }
    })
  }
})