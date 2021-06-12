import { Badge, withStyles } from '@material-ui/core'

const StyledBadge = withStyles(theme => ({
  badge: {
    border: `4px solid #202225`,
    height: 26,
    borderRadius: '100%',
  },
}))(Badge)

export default StyledBadge
