import { Grid } from '@material-ui/core'

const Messages = () => {
  return (
    <Grid container direction='column' style={{ width: '100%', height: '100vh' }}>
      <Grid item style={{ height: 48, zIndex: 10 }}>
        header
      </Grid>
      <Grid item xs style={{ overflow: 'auto' }}>
        message
      </Grid>
      <Grid item style={{ height: 68 }}>
        message box
      </Grid>
    </Grid>
  )
}
export default Messages
