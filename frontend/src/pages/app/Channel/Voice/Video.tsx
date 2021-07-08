import { Grid, makeStyles } from "@material-ui/core"
import { useRef } from "react"
import { useEffect } from "react"

type VideoProps = {
  stream?: MediaStream | null
  onClick?: (stream: MediaStream | null) => void
  className?: string
}
const Video: React.FC<VideoProps> = ({ stream, onClick, className }) => {
  const classes = useStyles()
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if(stream && videoRef.current) {
      videoRef.current.srcObject = stream
    }
  }, [stream]) // TODO: ?.id

  return (
    <Grid
      item
      className={className}
      onClick={() => {
        onClick?.(stream || null)
      }}
    >
      {stream && (
        <video
          autoPlay
          playsInline
          className={classes.video}
          ref={videoRef}
        />
      )}
    </Grid>
  )
}
export default Video

const useStyles = makeStyles({
  video: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
  }
})