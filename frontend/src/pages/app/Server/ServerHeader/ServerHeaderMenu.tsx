import { Divider, Grow, makeStyles, withStyles } from '@material-ui/core'
import { Settings, Notifications, VerifiedUser, Edit, CheckBoxOutlineBlank, ExitToApp } from '@material-ui/icons'
import StyledMenu from 'components/StyledMenu'
import StyledMenuItem from 'components/StyledMenuItem'
import StyledMenuItemAction from './StyledMenuItemAction'

import InvitePeopleAction from './InvitePeopleAction'
import { useFragment } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { ServerHeaderMenu_server$key } from './__generated__/ServerHeaderMenu_server.graphql'
import { ServerHeaderMenu_me$key } from './__generated__/ServerHeaderMenu_me.graphql'

type ServerHeaderMenuProps = {
  anchorEl: HTMLElement | null
  onClose: () => void
  me: ServerHeaderMenu_me$key
  server: ServerHeaderMenu_server$key
}
const ServerHeaderMenu: React.FC<ServerHeaderMenuProps> = ({ anchorEl, onClose, ...props }) => {
  const classes = useStyles()

  const me = useFragment(
    graphql`
      fragment ServerHeaderMenu_me on User {
        ...InvitePeopleAction_me
      }
    `,
    props.me
  )

  const server = useFragment(
    graphql`
      fragment ServerHeaderMenu_server on Server {
        ...InvitePeopleAction_server
      }
    `,
    props.server
  )
  
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

      <InvitePeopleAction
        me={me}
        server={server}
        handleCloseMenu={onClose}
      />
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
  leaveMenu: {
    color: theme.palette.error.main,
    '& + div': { color: theme.palette.error.main },
    '&:hover': {
      backgroundColor: `${theme.palette.error.main} !important`,
    },
    '&:hover + div': { color: '#fff' },
  },
}))



const StyledDivider = withStyles({
  root: {
    margin: 4
  }
})(Divider)