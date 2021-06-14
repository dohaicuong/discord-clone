import { Badge, withStyles } from '@material-ui/core'

const StyledBadge = withStyles({
  badge: {
    border: `2px solid #202225`,
    height: 16,
    width: 0,
    minWidth: 0,
    borderRadius: '100%',
  },
})(Badge)

export default StyledBadge
