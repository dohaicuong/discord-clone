import { useRef, useState } from 'react'
import { WebRtcPeer } from 'kurento-utils'
import { useEffect } from 'react'
import { useMutation } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { VoiceJoinSessionMutation } from './__generated__/VoiceJoinSessionMutation.graphql'
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

const Voice = () => {
  const classes = useStyles()
  const videoRef = useRef<HTMLVideoElement>()
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
  } = useStream()

  const [joinSessionCommit] = useMutation<VoiceJoinSessionMutation>(graphql`
    mutation VoiceJoinSessionMutation($input: StreamSessionJoinInput!) {
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
    
    if(stream) start()
    // eslint-disable-next-line
  }, [stream?.id, enqueueSnackbar, joinSessionCommit])

  const handleStopCall = () => {
    webRtcPeer?.dispose()
  }

  return (
    <div className={classes.container}>
      <div className={classes.gradientTop} />
      <div className={classes.gradientBottom} />

      <video
        ref={videoRef as any}
        autoPlay
        playsInline
        className={classes.video}
      />

      <div className={classes.videoControls}>
        <div className={classes.topControls}>
          controls
        </div>
        <div className={classes.bottomControls}>
          <div style={{ flexGrow: 1 }} />
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
              className={`${classes.controlButton} ${classes.endButton}`}
              onClick={handleStopCall}
            >
              <CallEnd />
            </Fab>
          </div>
          <div style={{ flexGrow: 1 }} />
        </div>
      </div>

      {/* <button onClick={() => startStreaming('Video')}>
        Video
      </button>
      <button onClick={() => startStreaming('Screen')}>
        Screen
      </button> */}
    </div>
  )
}
export default Voice

const useStyles = makeStyles({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    background: '#000',
  },
  videoControls: {
    // pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: '0 16px 16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  gradientTop: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    pointerEvents: 'none',
    height: 160,
    backgroundImage: 'linear-gradient(#000,rgba(0,0,0,.738) 19%,rgba(0,0,0,.541) 34%,rgba(0,0,0,.382) 47%,rgba(0,0,0,.278) 56.5%,rgba(0,0,0,.194) 65%,rgba(0,0,0,.126) 73%,rgba(0,0,0,.075) 80.2%,rgba(0,0,0,.042) 86.1%,rgba(0,0,0,.021) 91%,rgba(0,0,0,.008) 95.2%,rgba(0,0,0,.002) 98.2%,transparent)',
  },
  gradientBottom: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    pointerEvents: 'none',
    transform: 'scaleY(-1)',
    height: 160,
    backgroundImage: 'linear-gradient(#000,rgba(0,0,0,.738) 19%,rgba(0,0,0,.541) 34%,rgba(0,0,0,.382) 47%,rgba(0,0,0,.278) 56.5%,rgba(0,0,0,.194) 65%,rgba(0,0,0,.126) 73%,rgba(0,0,0,.075) 80.2%,rgba(0,0,0,.042) 86.1%,rgba(0,0,0,.021) 91%,rgba(0,0,0,.008) 95.2%,rgba(0,0,0,.002) 98.2%,transparent)',
  },
  video: {
    marginTop: 48,
    marginBottom: 56,
    height: 'calc(100% - 48px - 56px)',
    width: '100%',
  },
  topControls: {
    height: 48
  },
  bottomControls: {
    height: 56,
    display: 'flex'
  },
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