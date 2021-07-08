import { Grid, makeStyles } from '@material-ui/core'
import { useState } from 'react'
import VoiceChannelControls from './VoiceChannelControls'
import Video from './Video'
import { useParams } from 'react-router-dom'

const Voice = () => {
  const classes = useStyles()
  const params = useParams()
  
  const [mainStream, setMainStream] = useState<MediaStream | null>(null)
  const [localStream, setLocalStream] = useState<MediaStream | null>(null)
  // joinSession (userId, channelId, offer, candidates) -> answer, candidates, sessions
  // updateSession(sessionId, offer, candidates)
  // leaveSession
  // subscribe to channel -> new session, updated session
  // connect to session (offer, candidates) -> answer, candidates
  
  return (
    <div className={classes.callContainer}>
      <Grid container spacing={2} className={classes.videosContainer}>
        <Grid item xs className={classes.mainVideoContainer}>
          <Video
            stream={mainStream}
            className={classes.mainVideoWrapper}
          />
        </Grid>
        <Grid item className={classes.listVideoContainer}>
          <Grid container className={classes.listVideoContainerInner}>
            <Video
              className={classes.sideVideoWrapper}
              stream={localStream}
              // onClick={setMainStream}
            />

            {/* {Array(3).fill(1).map((_, i) => (
              <Video
                key={i}
                className={classes.sideVideoWrapper}
                // onClick={setMainStream}
              />
            ))} */}
          </Grid>
        </Grid>
      </Grid>

      <div className={classes.videoControls}>
        <VoiceChannelControls
          channelId={params.channelId}
          onLocalStreamChange={setLocalStream}
          onRemoteStream={setMainStream}
        />
      </div>
    </div>
  )
}
export default Voice

const useStyles = makeStyles({
  callContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    background: '#000',
    overflow: 'hidden',
    '&:hover > $videoControls': {
      opacity: 1,
      transition: 'all 0.35s ease-in-out'
    }
  },

  videoControls: {
    opacity: 0,
    transition: 'all 0.35s ease-in-out',

    pointerEvents: 'none',
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

  videosContainer: {
    height: '100%',
    padding: '0 8px 8px',
  },
  mainVideoContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  mainVideoWrapper: {
    background: 'rgb(45, 41, 40)',
    width: '100%',
    paddingTop: '56.25%',
    position: 'relative',
    borderRadius: 8,
  },

  listVideoContainer: {
    height: '100vh',
    margin: '8px 0',
    paddingRight: 0,
    display: 'flex',
    alignItems: 'center',
  },
  listVideoContainerInner: {
    width: 228,
    // height: '100%',
    maxHeight: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    paddingRight: 8,
  },
  sideVideoWrapper: {
    position: 'relative',
    background: 'rgb(45, 41, 40)',
    width: 228,
    height: 125,
    borderRadius: 8,
    margin: '4px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
})