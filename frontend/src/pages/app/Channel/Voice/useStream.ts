import { useState, useEffect } from 'react'

const useStream = () => {
  const [video, setVideo] = useState<null | 'camera' | 'screen'>(null)

  const handleToggleCamera = () => {
    setVideo(pre => pre === 'camera' ? null : 'camera')
  }
  const handleToggleScreen = () => {
    setVideo(pre => pre === 'screen' ? null : 'screen')
  }

  const [audio, setAudio] = useState<boolean>(false)
  const handleToggleAudio = () => setAudio(pre => !pre)

  const [stream, setStream] = useState<MediaStream | null>(null)
  useEffect(() => {
    getVideoStream(video, audio)
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

  useEffect(() => {
    return () => {
      if(stream) {
        const tracks = stream.getTracks()
        tracks.forEach(track => track.stop())
      }
    }
    // eslint-disable-next-line
  }, [stream?.id])

  return {
    stream,
    video,
    handleToggleCamera,
    handleToggleScreen,
    audio,
    handleToggleAudio,
  }
}
export default useStream

const getVideoStream = async (video: null | 'camera' | 'screen', audio: boolean): Promise<MediaStream | null> => {
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