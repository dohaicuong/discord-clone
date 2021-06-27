import kurento from "kurento-client"
import { extendType, inputObjectType, nonNull, objectType } from "nexus"

export const StreamSessionJoinInput = inputObjectType({
  name: 'StreamSessionJoinInput',
  definition: t => {
    t.nonNull.string('offer')
    t.nonNull.list.nonNull.iceCandidate('candidates')
  }
})
export const StreamSessionJoinPayload = objectType({
  name: 'StreamSessionJoinPayload',
  definition: t => {
    t.nonNull.string('answer')
    t.nonNull.list.nonNull.iceCandidate('candidates')
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
        const pipeline = await ctx.kurentoClient.create('MediaPipeline')
        const webRtcEndpoint = await pipeline.create('WebRtcEndpoint')
        addIceCandidates(webRtcEndpoint, input.candidates)

        await webRtcEndpoint.connect(webRtcEndpoint)

        const { answer, candidates } = await processLocalInfo(webRtcEndpoint, input.offer)

        return { answer, candidates }
      }
    })
  }
})

const addIceCandidates = (webRtcEndpoint: kurento.WebRtcEndpoint, candidates: any[]) => {
  candidates.forEach(candidate => {
    webRtcEndpoint.addIceCandidate(candidate)
  })
}

const processLocalInfo = async (webRtcEndpoint: kurento.WebRtcEndpoint, offer: string) => {
  const answer = await webRtcEndpoint.processOffer(offer)

  const candidates: string[] = []
  webRtcEndpoint.on('OnIceCandidate', event => {
    candidates.push(event.candidate as any)
  })
  await webRtcEndpoint.gatherCandidates()

  return { answer, candidates }
}