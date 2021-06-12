import { withStyles, Divider } from '@material-ui/core'

const StyledDivider = withStyles({
  root: {
    width: 32,
    height: 2,
    margin: 'auto',
  }
})(Divider)

export default StyledDivider
