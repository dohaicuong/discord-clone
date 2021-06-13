import { Divider, Grow, ListItemSecondaryAction, makeStyles, withStyles } from '@material-ui/core'
import { PersonAdd, Settings, Notifications, VerifiedUser, Edit, CheckBoxOutlineBlank, ExitToApp } from '@material-ui/icons'
import StyledMenu from 'components/StyledMenu'
import StyledMenuItem from 'components/StyledMenuItem'

type ServerHeaderMenuProps = {
  anchorEl: HTMLElement | null
  onClose: () => void
}
const ServerHeaderMenu: React.FC<ServerHeaderMenuProps> = ({ anchorEl, onClose }) => {
  const classes = useStyles()
  
  return (
    <StyledMenu
      classes={{
        paper: classes.menuPaper,
        // @ts-ignore
        list: classes.menuList,
      }}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      TransitionComponent={Grow}
      keepMounted
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: -8, horizontal: 'center' }}
    >
      <StyledMenuItem onClick={onClose}>
        Server Boost
      </StyledMenuItem>
      <StyledDivider />

      <StyledMenuItem onClick={onClose} className={classes.inviteMenu}>
        Invite People
        <StyledMenuItemAction>
          <PersonAdd className={classes.menuIcon} />
        </StyledMenuItemAction>
      </StyledMenuItem>
      <StyledMenuItem onClick={onClose}>
        Server Settings
        <StyledMenuItemAction>
          <Settings className={classes.menuIcon} />
        </StyledMenuItemAction>
      </StyledMenuItem>
      <StyledDivider />

      <StyledMenuItem onClick={onClose}>
        Notification Settings
        <StyledMenuItemAction>
          <Notifications className={classes.menuIcon} />
        </StyledMenuItemAction>
      </StyledMenuItem>
      <StyledMenuItem onClick={onClose}>
        Privacy Settings
        <StyledMenuItemAction>
          <VerifiedUser className={classes.menuIcon} />
        </StyledMenuItemAction>
      </StyledMenuItem>
      <StyledDivider />

      <StyledMenuItem onClick={onClose}>
        Change Nickname
        <StyledMenuItemAction>
          <Edit className={classes.menuIcon} />
        </StyledMenuItemAction>
      </StyledMenuItem>
      <StyledMenuItem onClick={onClose}>
        Hide Muted Channels
        <StyledMenuItemAction>
          <CheckBoxOutlineBlank className={classes.menuIcon} />
        </StyledMenuItemAction>
      </StyledMenuItem>
      <StyledDivider />

      <StyledMenuItem onClick={onClose} className={classes.leaveMenu}>
        Leave Server
        <StyledMenuItemAction>
          <ExitToApp className={classes.menuIcon} />
        </StyledMenuItemAction>
      </StyledMenuItem>
    </StyledMenu>
  )
}
export default ServerHeaderMenu

const useStyles = makeStyles(theme => ({
  menuPaper: {
    width: 220,
    padding: '6px 8px'
  },
  menuList: {
    padding: 0,
  },
  menuIcon: {
    width: 18,
    height: 18,
  },
  inviteMenu: {
    color: theme.palette.primary.main,
    '& + div': { color: theme.palette.primary.main },
    '&:hover': {
      backgroundColor: `${theme.palette.primary.main} !important`,
    },
    '&:hover + div': { color: '#fff' },
  },
  leaveMenu: {
    color: theme.palette.error.main,
    '& + div': { color: theme.palette.error.main },
    '&:hover': {
      backgroundColor: `${theme.palette.error.main} !important`,
    },
    '&:hover + div': { color: '#fff' },
  },
}))

const StyledMenuItemAction = withStyles({
  root: {
    display: 'flex',
    right: 8
  }
})(ListItemSecondaryAction)

const StyledDivider = withStyles({
  root: {
    margin: 4
  }
})(Divider)