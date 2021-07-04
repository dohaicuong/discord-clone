import { connectionFromPromisedArray } from 'graphql-relay'
import { enumType, extendType, objectType } from 'nexus'

export * from './MutationJoinSession'
export * from './SubscriptionSessionCreated'


export const StreamSessionVideoType = enumType({
  name: 'StreamSessionVideoType',
  members: ['SCREEN', 'CAMERA', 'OFF']
})

export const StreamSessionAudioType = enumType({
  name: 'StreamSessionAudioType',
  members: ['ON', 'OFF']
})

export const StreamSession = objectType({
  name: 'StreamSession',
  definition: t => {
    t.implements('Node') // id

    t.nonNull.field('video', { type: 'StreamSessionVideoType' })
    t.nonNull.field('audio', { type: 'StreamSessionAudioType' })
    t.nonNull.datetime('startedAt')
    t.datetime('endedAt')

    t.nonNull.field('user', {
      type: 'User',
      resolve: (session, _args, ctx) => {
        return ctx.prisma.streamSession
          .findUnique({ where: (session as any).id })
          .user()
      }
    })

    t.nonNull.field('channel', {
      type: 'Channel',
      resolve: (session, _args, ctx) => {
        return ctx.prisma.streamSession
          .findUnique({ where: (session as any).id })
          .channel()
      }
    })
  }
})

export const ExtendedChannel = extendType({
  type: 'Channel',
  definition: t => {
    t.string('mediaPipelineId')
    t.nonNull.connectionField('streamSessions', {
      type: 'StreamSession',
      resolve: (channel, args, ctx) => {
        return connectionFromPromisedArray(
          ctx.prisma.channel
            .findUnique({ where: { id: (channel as any).id }})
            .streamSessions(),
          args
        )
      }
    })
  }
})

// mutation joinSession(userId, channelId, offer, candidates): { answer, candidates } -> sessionCreated
// subscription sessionCreated

// mutation toggleMedia(sessionId, offer, candidates): { answer, candidates } -> sessionUpdated
// subscription sessionUpdated

// mutation endSession(sessionId) -> sessionEnded
// subscription sessionEnded