import { useRef } from 'react'
import { makeStyles } from '@material-ui/core'
import VoiceChannelMainActions from './VoiceChannelMainActions'

const Voice = () => {
  const classes = useStyles()
  const videoRef = useRef<HTMLVideoElement>()

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
          <VoiceChannelMainActions videoRef={videoRef} />
          <div style={{ flexGrow: 1 }} />
        </div>
      </div>
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
})