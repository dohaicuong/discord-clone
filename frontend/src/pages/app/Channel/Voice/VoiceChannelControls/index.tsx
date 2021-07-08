import { useEffect } from "react"
import { useSnackbar } from "notistack"
import { useMutation } from "react-relay"
import { graphql } from "babel-plugin-relay/macro"
import { makeStyles, IconButton, Divider, Typography } from "@material-ui/core"
import { VolumeHigh } from 'mdi-material-ui'
import {
  ViewQuilt, MoreHoriz, Inbox,
  PersonAdd, OpenInNew, Fullscreen,
} from '@material-ui/icons'

import VideoControls from './VideoControls'
import useWebRtcPeer from "./useWebRtcPeer"

import { VoiceChannelControlsJoinMutation } from "./__generated__/VoiceChannelControlsJoinMutation.graphql"

type VoiceChannelControlsProps = {
  channelId: string
  onLocalStreamChange?: (stream: MediaStream | null) => void
  onRemoteStream?: (stream: MediaStream | null) => void
}
const VoiceChannelControls: React.FC<VoiceChannelControlsProps> = ({ channelId, onLocalStreamChange, onRemoteStream }) => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()

  const {
    webRtcPeer, signalling, serverSignalling,
    stream, video, audio, 
    ...webRtcPeerHandlers
  } = useWebRtcPeer()
  
  // TODO: remove this
  useEffect(() => {
    if(webRtcPeer) {
      webRtcPeer.peerConnection.onconnectionstatechange = (event) => {
        if(webRtcPeer.peerConnection.connectionState === 'connected') {
          const remoteStream = webRtcPeer.getRemoteStream()
          onRemoteStream?.(remoteStream)
        }
      }
    }
  }, [webRtcPeer])

  const [joinSessionCommit] = useMutation<VoiceChannelControlsJoinMutation>(graphql`
    mutation VoiceChannelControlsJoinMutation($input: StreamSessionJoinInput!) {
      streamSessionJoin(input: $input) {
        answer
        candidates
      }
    }
  `)

  useEffect(() => {
    onLocalStreamChange?.(stream)
    const start = async () => {
      if(!webRtcPeer) return
      
      const signallingData = await signalling()
      if(!signallingData) return

      joinSessionCommit({
        variables: {
          input: {
            channelId,
            offer: signallingData.offer,
            candidates: signallingData.iceCandidates
          }
        },
        onCompleted: (res, errors) => {
          if(errors) return errors?.forEach(error => enqueueSnackbar(error.message, { variant: 'error' }))

          const { answer, candidates } = res.streamSessionJoin
          serverSignalling(answer, candidates)
        }
      })
    }
    start()
    // eslint-disable-next-line
  }, [webRtcPeer, onLocalStreamChange]) // TODO ?.id

  return (
    <>
      <div className={classes.topControls}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <VolumeHigh />
          <Typography>
            General
          </Typography>
        </div>
        <div style={{ flexGrow: 1 }} />
        <div style={{ display: 'flex', padding: '8px 0' }}>
          <IconButton><ViewQuilt /></IconButton>
          <IconButton><MoreHoriz /></IconButton>
          <Divider orientation='vertical' flexItem />
          <IconButton><Inbox /></IconButton>
        </div>
      </div>
      <div className={classes.bottomControls}>
        <div style={{ flexGrow: 1 }}>
          <IconButton>
            <PersonAdd />
          </IconButton>
        </div>
        <VideoControls
          cameraActive={video === 'camera'}
          screenActive={video === 'screen'}
          micActive={audio}
          {...webRtcPeerHandlers}
        />
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton>
            <OpenInNew />
          </IconButton>
          <IconButton>
            <Fullscreen />
          </IconButton>
        </div>
      </div>

      <div className={classes.gradientTop} />
      <div className={classes.gradientBottom} />
    </>
  )
}
export default VoiceChannelControls

const useStyles = makeStyles({
  topControls: {
    height: 48,
    display: 'flex',
    zIndex: 1,
    pointerEvents: 'auto',
  },

  bottomControls: {
    zIndex: 1,
    height: 56,
    display: 'flex',
    justifyContent: 'center',
    pointerEvents: 'auto',
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
})