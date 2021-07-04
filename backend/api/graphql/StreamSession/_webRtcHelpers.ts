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