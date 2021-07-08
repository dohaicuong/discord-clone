import { makeStyles, Fab } from "@material-ui/core"
import { Videocam, ScreenShare, Mic, CallEnd } from '@material-ui/icons'
import clsx from "clsx"

type VideoControlsProps = {
  cameraActive: boolean
  screenActive: boolean
  micActive: boolean

  handleToggleCamera: () => void
  handleToggleScreen: () => void
  handleToggleMic: () => void
  handleStop: () => void
}
const VideoControls: React.FC<VideoControlsProps> = ({
  cameraActive,
  screenActive,
  micActive,
  handleToggleCamera,
  handleToggleScreen,
  handleToggleMic,
  handleStop
}) => {
  const classes = useStyles()

  return (
    <div>
      <Fab
        className={clsx(
          classes.controlButton,
          cameraActive && classes.activeButton,
        )}
        onClick={handleToggleCamera}
      >
        <Videocam />
      </Fab>
      <Fab
        className={clsx(
          classes.controlButton,
          screenActive && classes.activeButton,
        )}
        onClick={handleToggleScreen}
      >
        <ScreenShare />
      </Fab>
      <Fab
        className={clsx(
          classes.controlButton,
          micActive && classes.activeButton
        )}
        onClick={handleToggleMic}
      >
        <Mic />
      </Fab>
      <Fab
        className={clsx(classes.controlButton, classes.endButton)}
        onClick={handleStop}
      >
        <CallEnd />
      </Fab>
    </div>
  )
}
export default VideoControls

const useStyles = makeStyles({
  controlButton: {
    zIndex: 1,
    pointerEvents: 'auto',
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
  },
})