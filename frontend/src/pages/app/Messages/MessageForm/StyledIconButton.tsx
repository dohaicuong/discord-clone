import { IconButton, withStyles } from '@material-ui/core'

const StyledIconButton = withStyles({
  root: {
    padding: 0,
    margin: '0 8px',
    color: '#b9bbbe',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#dcddde',
    }
  }
})((props: any) => <IconButton {...props} disableRipple disableFocusRipple disableTouchRipple />)

export default StyledIconButton
