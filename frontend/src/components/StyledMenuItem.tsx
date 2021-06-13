import { MenuItem, withStyles } from '@material-ui/core'

const StyledMenuItem = withStyles(theme => ({
  root: {
    position: 'relative',
    fontSize: 14,
    fontWeight: 500,
    margin: '2px 0',
    padding: '6px 8px',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      borderRadius: 4,
      color: '#fff',
    },
    '&:hover + div': {
      color: '#fff',
    },
  }
}))(MenuItem)

export default StyledMenuItem
