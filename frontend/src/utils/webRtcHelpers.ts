import { WebRtcPeer } from 'kurento-utils'

export const getAudioStream = async (): Promise<MediaStream | undefined> => {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: false,
    audio: true,
  })
  return stream
}

export const getWebRtcPeer = (options: any): Promise<WebRtcPeer> => {
  const createPeer = options.videoStream 
    // ? WebRtcPeer.WebRtcPeerSendonly
    ? WebRtcPeer.WebRtcPeerSendrecv
    : WebRtcPeer.WebRtcPeerRecvonly
    
  return new Promise((resolve, reject) => {
    const webRtcPeer = createPeer(
      options,
      err => {
        if(err) return reject(err)
        resolve(webRtcPeer)
      }
    )
  })
}

export const processLocalStream = (webRtcPeer: WebRtcPeer): Promise<{ offer: string, iceCandidates: RTCIceCandidate[] }> => {
  return new Promise((resolve, reject) => {
    let offer: string
    const iceCandidates: any[] = []
    webRtcPeer.on('icecandidate', candidate => {
      iceCandidates.push(candidate)
    })

    webRtcPeer.on('candidategatheringdone', () => {
      resolve({ offer, iceCandidates })
    })
    
    webRtcPeer.generateOffer((err, sdpOffer) => {
      if(err) return reject(err)

      offer = sdpOffer
    })
  })
}

export const processServerInfo = (webRtcPeer: WebRtcPeer, answer: string, iceCandidates: any[]) => {
  webRtcPeer.processAnswer(answer, error => {
    if(error) return console.log(error)
    iceCandidates.forEach(candidate => {
      webRtcPeer.addIceCandidate(candidate)
    })
  })
}