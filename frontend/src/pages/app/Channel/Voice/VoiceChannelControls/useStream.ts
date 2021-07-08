import { useState, useEffect } from "react"

export type useStreamPayload = {
  stream: MediaStream | null
  video: "camera" | "screen" | null
  audio: boolean
  handleToggleCamera: () => void
  handleToggleScreen: () => void
  handleToggleAudio: () => void
  handleStop: () => void
}
const useStream = () => {
  const [video, setVideo] = useState<null | 'camera' | 'screen'>(null)
  const handleToggleCamera = () => setVideo(pre => pre === 'camera' ? null : 'camera')
  const handleToggleScreen = () => setVideo(pre => pre === 'screen' ? null : 'screen')

  const [audio, setAudio] = useState<boolean>(false)
  const handleToggleMic = () => setAudio(pre => !pre)

  const [stream, setStream] = useState<MediaStream | null>(null)
  const handleStop = () => {
    const tracks = stream?.getTracks()
    tracks?.forEach(track => track.stop())
    setVideo(null)
    setAudio(false)
  }

  // get stream when input change effect
  useEffect(() => {
    getLocalStream(video, audio)
      .then(stream => {
        setStream(stream)
        if(stream) {
          // @ts-ignore
          stream.oninactive = () => {
            if(video === 'screen') setVideo(null)
          }
        }
      })
  }, [video, audio])

  // cleanup stream effect
  useEffect(() => {
    return () => {
      if(stream) {
        const tracks = stream.getTracks()
        tracks.forEach(track => track.stop())
      }
    }
    // eslint-disable-next-line
  }, [stream]) // TODO: ?.id

  return {
    stream,
    video, handleToggleCamera, handleToggleScreen,
    audio, handleToggleMic,
    handleStop,
  }
}
export default useStream

const getLocalStream = async (video: null | 'camera' | 'screen', audio: boolean): Promise<MediaStream | null> => {
  if(video === 'screen') {
    const stream: MediaStream = await (navigator.mediaDevices as any).getDisplayMedia({
      audio,
      video: { cursor: 'always' }
    })
    return stream
  }
  
  if(video === 'camera' || audio) {
    const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
      audio,
      video: video === 'camera',
    })
    return stream
  }
  
  return null
} 