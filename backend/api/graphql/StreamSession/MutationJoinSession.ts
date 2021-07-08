import { extendType, inputObjectType, nonNull, objectType } from "nexus"
import { addIceCandidates, getOrCreateMediapipeline, processLocalInfo } from './_webRtcHelpers'

export const StreamSessionJoinInput = inputObjectType({
  name: 'StreamSessionJoinInput',
  definition: t => {
    t.nonNull.relayId('channelId')
    t.nonNull.string('offer')
    t.nonNull.list.nonNull.iceCandidate('candidates')
  }
})
export const StreamSessionJoinPayload = objectType({
  name: 'StreamSessionJoinPayload',
  definition: t => {
    t.nonNull.string('answer')
    t.nonNull.list.nonNull.iceCandidate('candidates')
    t.nonNull.field('streamSession', { type: 'StreamSession' })
  }
})
export const StreamSessionJoinMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('streamSessionJoin', {
      args: {
        input: nonNull('StreamSessionJoinInput')
      },
      type: nonNull('StreamSessionJoinPayload'),
      resolve: async (_, { input }, ctx) => {
        if(!ctx.userId) throw new Error('Please login')

        const channel = await ctx.prisma.channel.findUnique({ where: { id: input.channelId }})
        if(!channel) throw new Error('Channel is not found')

        // create or get mediapipeline
        const pipeline = await getOrCreateMediapipeline(ctx.kurentoClient, channel.mediaPipelineId);
        // if new one is created update to db
        if(pipeline.id !== channel.mediaPipelineId) {
          await ctx.prisma.channel.update({
            where: { id: input.channelId },
            data: { mediaPipelineId: pipeline.id }
          })
        }

        // const composite = await pipeline.create('Composite')
        // const hubport = await (composite as any).createHubPort()

        const webRtcEndpoint = await pipeline.create('WebRtcEndpoint')
        addIceCandidates(webRtcEndpoint, input.candidates)

        await webRtcEndpoint.connect(webRtcEndpoint)

        const { answer, candidates } = await processLocalInfo(webRtcEndpoint, input.offer)

        const streamSession = await ctx.prisma.streamSession.create({
          data: {
            userId: ctx.userId,
            channelId: input.channelId,
            webRtcEndpointId: webRtcEndpoint.id
          }
        })
        ctx.pubsub.publish({
          topic: 'STREAM_SESSION_CREATED',
          payload: {
            channelId: input.channelId,
            streamSession
          }
        })

        return {
          answer,
          candidates,
          streamSession
        }
      }
    })
  }
})
