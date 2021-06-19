import { ListItemSecondaryAction, withStyles } from '@material-ui/core'

const StyledMenuItemAction = withStyles({
  root: {
    display: 'flex',
    right: 8
  }
})(ListItemSecondaryAction)

export default StyledMenuItemAction
