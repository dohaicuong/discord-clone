import { WebRtcPeer } from 'kurento-utils'
import { useEffect, useState, useCallback } from "react"
import { useLocation } from "react-router-dom"
import useStream from './useStream'
import {
  getWebRtcPeer,
  processLocalStream,
  processServerInfo,
} from '../../../../../utils/webRtcHelpers'

const useWebRtcPeer = () => {
  const [webRtcPeer, setWebRtcPeer] = useState<WebRtcPeer | null>(null)
  const { pathname } = useLocation()
  const { stream, ...useStreamPayload } = useStream()

  const signalling = useCallback(async () => {
    if(webRtcPeer) {
      return processLocalStream(webRtcPeer)
    }
  }, [webRtcPeer])

  const serverSignalling = useCallback(async (answer, candidates) => {
    if(webRtcPeer) {
      processServerInfo(webRtcPeer, answer, candidates)
    }
  }, [webRtcPeer])

  const stop = useCallback(() => {
    webRtcPeer?.dispose()
  }, [webRtcPeer])

  // clean up webRtcPeer on path change
  useEffect(() => {
    const start = async () => {
      const webRtcPeer = await getWebRtcPeer({ videoStream: stream })
      setWebRtcPeer(webRtcPeer)
    }
    if(stream) start()

    return () => {
      stop()
    }
    // eslint-disable-next-line
  }, [pathname, stream])

  return {
    webRtcPeer,
    signalling,
    serverSignalling,
    stream, 
    ...useStreamPayload,
    handleStop: () => {
      stop()
      useStreamPayload.handleStop()
    },
  }
}
export default useWebRtcPeer
