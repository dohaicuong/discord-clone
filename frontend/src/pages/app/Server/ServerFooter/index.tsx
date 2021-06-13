import { graphql } from "babel-plugin-relay/macro"
import { useFragment } from "react-relay"
import { ServerFooter_server$key } from "./__generated__/ServerFooter_server.graphql"
import { Badge, List, ListItem, ListItemIcon, Avatar, ListItemText, ListItemSecondaryAction, withStyles, makeStyles } from '@material-ui/core'
import { ToggleButton } from '@material-ui/lab'
import { Mic, Headset, Settings } from '@material-ui/icons'

type ServerFooterProps = {
  server: ServerFooter_server$key
}
const ServerFooter: React.FC<ServerFooterProps> = props => {
  const classes = useStyles()

  const server = useFragment(
    graphql`
      fragment ServerFooter_server on Server {
        serverUsers(
          first: 1,
          filters: { currentUser: true }
        ) {
          edges {
            node {
              id
              nickname
              user {
                avatar
              }
            }
          }
        }
      }
    `,
    props.server
  )
  const serverUser = server.serverUsers.edges.map(({ node }) => node)?.[0]
  if(!serverUser) return <>Something is wrong, try again</>

  return (
    <div style={{ height: 52, backgroundColor: '#2a2b2e' }}>
      <List dense style={{ padding: 0 }}>
        <ListItem classes={{ root: classes.listItemRoot }}>
          <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
            <StyledBadge
              color='secondary'
              overlap='circle'
              badgeContent=' '
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
              <Avatar
                style={{ width: 32, height: 32 }}
                src={serverUser.user.avatar || undefined}
              >
              </Avatar>
            </StyledBadge>
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.primaryText,
              secondary: classes.secondaryText,
            }}
            primary={serverUser.nickname}
            secondary={`#${serverUser.id}`}
          />
          <ListItemSecondaryAction className={classes.actionRoot}>
            <StyledToggleButton className={classes.actionButton}>
              <Mic className={classes.actionIcon} />
            </StyledToggleButton>
            <StyledToggleButton className={classes.actionButton}>
              <Headset className={classes.actionIcon} />
            </StyledToggleButton>
            <StyledToggleButton className={classes.actionButton}>
              <Settings className={classes.actionIcon} />
            </StyledToggleButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  )
}
export default ServerFooter

const useStyles = makeStyles({
  listItemRoot: {
    width: 145,
    padding: '0 8px',
  },
  listItemIconRoot: {
    minWidth: 32,
    width: 32,
    marginRight: 8,
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.8
    }
  },
  primaryText: {
    fontSize: 14,
    fontWeight: 600,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  secondaryText: {
    fontSize: 12,
    color: '#b9bbbe',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  actionRoot: {
    right: 8,
  },
  actionButton: {
    '&:hover': {
      backgroundColor: 'rgba(79,84,92,0.32)',
    },
    '&:hover svg': {
      color: '#dcddde',
    }
  },
  actionIcon: {
    color: '#b9bbbe',
    width: 20,
    height: 20,
  }
})

const StyledToggleButton = withStyles({
  root: {
    width: 32,
    height: 32,
    border: 'none'
  }
})(ToggleButton)

const StyledBadge = withStyles(theme => ({
  badge: {
    border: `3px solid #202225`,
    height: 18,
    width: 10,
    minWidth: 10,
    borderRadius: '100%',
  },
}))(Badge)