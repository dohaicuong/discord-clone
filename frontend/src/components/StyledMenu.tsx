import { Menu, MenuProps, withStyles } from '@material-ui/core'

const StyledMenu = withStyles({
  paper: {
    backgroundColor: '#18191c',
    color: '#b9bbbe !important',
    fontSize: '14px !important',
  }
})((props: MenuProps) => (
  <Menu
    elevation={2}
    getContentAnchorEl={null}
    {...props}
  />
))
export default StyledMenu
