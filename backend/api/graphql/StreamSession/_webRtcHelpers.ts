import kurento from 'kurento-client'

export const addIceCandidates = (webRtcEndpoint: kurento.WebRtcEndpoint, candidates: any[]) => {
  candidates.forEach(candidate => {
    webRtcEndpoint.addIceCandidate(candidate)
  })
}

export const processLocalInfo = async (webRtcEndpoint: kurento.WebRtcEndpoint, offer: string) => {
  const answer = await webRtcEndpoint.processOffer(offer)

  const candidates: string[] = []
  webRtcEndpoint.on('OnIceCandidate', event => {
    candidates.push(event.candidate as any)
  })
  await webRtcEndpoint.gatherCandidates()

  return { answer, candidates }
}

export const getOrCreateMediapipeline = async (kurentoClient: kurento.ClientInstance, mediaPipelineId: string | null) => {
  return mediaPipelineId
    ? await kurentoClient.getMediaobjectById<kurento.MediaPipeline>(mediaPipelineId)
      .catch(err => {
        // if the current is expired, create a new one
        return kurentoClient.create('MediaPipeline')
      })
    : await kurentoClient.create('MediaPipeline')
}