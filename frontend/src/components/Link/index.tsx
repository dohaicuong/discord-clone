import { Link as MuiLink, withStyles } from '@material-ui/core'

const Link = withStyles({
  root: {
    color: '#7289da',
    fontWeight: 500,
    cursor: 'pointer',
  }
})(MuiLink)

export default Link
