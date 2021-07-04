import { useState } from 'react'
import { WebRtcPeer } from 'kurento-utils'
import { useEffect } from 'react'
import { useMutation } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { useSnackbar } from 'notistack'
import { useLocation } from 'react-router-dom'
import { Fab, makeStyles } from '@material-ui/core'
import {
  getWebRtcPeer,
  processLocalStream,
  processServerInfo,
} from './webRtcHelpers'
import { Videocam, ScreenShare, Mic, CallEnd } from '@material-ui/icons'
import useStream from './useStream'
import clsx from 'clsx'
import { VoiceChannelMainActionsJoinMutation } from './__generated__/VoiceChannelMainActionsJoinMutation.graphql'

type VoiceChannelMainActionsProps = {
  videoRef: any
}
const VoiceChannelMainActions: React.FC<VoiceChannelMainActionsProps> = ({ videoRef }) => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()

  const [webRtcPeer, setWebRtcPeer] = useState<WebRtcPeer | null>(null)
  const { pathname } = useLocation()
  useEffect(() => {
    return () => webRtcPeer?.dispose()
    // eslint-disable-next-line
  }, [pathname, webRtcPeer])

  const {
    stream,
    video, handleToggleCamera, handleToggleScreen,
    audio, handleToggleAudio,
    handleStop
  } = useStream()

  const [joinSessionCommit] = useMutation<VoiceChannelMainActionsJoinMutation>(graphql`
    mutation VoiceChannelMainActionsJoinMutation($input: StreamSessionJoinInput!) {
      streamSessionJoin(input: $input) {
        answer
        candidates
      }
    }
  `)

  useEffect(() => {
    const start = async () => {
      const webRtcPeer = await getWebRtcPeer({ remoteVideo: videoRef.current, videoStream: stream })
      setWebRtcPeer(webRtcPeer)
      const { offer, iceCandidates } = await processLocalStream(webRtcPeer)
      
      joinSessionCommit({
        variables: {
          input: {
            offer,
            candidates: iceCandidates
          }
        },
        onCompleted: (res, errors) => {
          if(errors) return errors?.forEach(error => enqueueSnackbar(error.message, { variant: 'error' }))

          const { answer, candidates } = res.streamSessionJoin
          processServerInfo(webRtcPeer, answer, candidates as any[])
        }
      })
    }
    
    start()
    // eslint-disable-next-line
  }, [stream?.id, enqueueSnackbar, joinSessionCommit])

  const handleStopCall = () => {
    webRtcPeer?.dispose()
    handleStop()
  }
  
  return (
    <div>
      <Fab
        className={clsx(
          classes.controlButton,
          video === 'camera' && classes.activeButton,
        )}
        onClick={handleToggleCamera}
      >
        <Videocam />
      </Fab>
      <Fab
        className={clsx(
          classes.controlButton,
          video === 'screen' && classes.activeButton,
        )}
        onClick={handleToggleScreen}
      >
        <ScreenShare />
      </Fab>
      <Fab
        className={clsx(
          classes.controlButton,
          audio && classes.activeButton
        )}
        onClick={handleToggleAudio}
      >
        <Mic />
      </Fab>
      <Fab
        className={clsx(classes.controlButton, classes.endButton)}
        onClick={handleStopCall}
      >
        <CallEnd />
      </Fab>
    </div>
  )
}
export default VoiceChannelMainActions

const useStyles = makeStyles({
  controlButton: {
    margin: '0 8px',
    background: '#2e3136',
    color: '#fff',
    '&:hover': {
      background: '#151619'
    }
  },
  endButton: {
    background: '#ed4244',
    color: '#fff',
    '&:hover': {
      background: '#ed4244'
    }
  },
  activeButton: {
    background: '#fff',
    color: '#151619',
    '&:hover': {
      background: '#fff'
    }
  }
})