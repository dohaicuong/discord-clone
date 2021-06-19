import { makeStyles, Dialog, Typography } from '@material-ui/core'
import { PersonAdd } from '@material-ui/icons'
import StyledMenuItem from 'components/StyledMenuItem'
import { useState } from 'react'
import StyledMenuItemAction from '../StyledMenuItemAction'
import StyledDialogTitle from 'components/StyledDialogTitle'
import StyledDialogContent from 'components/StyledDialogContent'
import { useFragment } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { InvitePeopleAction_server$key } from './__generated__/InvitePeopleAction_server.graphql'
import StyledTextField from 'components/InputTextField/StyledTextField'
import Button from 'components/Button'
import { useMemo } from 'react'
import { useRef } from 'react'
import { InvitePeopleAction_me$key } from './__generated__/InvitePeopleAction_me.graphql'

type InvitePeopleActionProps = {
  handleCloseMenu: () => void
  me: InvitePeopleAction_me$key
  server: InvitePeopleAction_server$key
}

const InvitePeopleAction: React.FC<InvitePeopleActionProps> = ({ handleCloseMenu, ...props }) => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const me = useFragment(
    graphql`
      fragment InvitePeopleAction_me on User {
        id
      }
    `,
    props.me
  )

  const server = useFragment(
    graphql`
      fragment InvitePeopleAction_server on Server {
        id
        title
      }
    `,
    props.server
  )

  const inviteLink = useMemo(() => {
    const { protocol, host } = window.location
    return `${protocol}//${host}/invite/${server.id}/${me.id}`
  }, [me.id, server.id])
  const [isCopying, setIsCopying] = useState(false)
  const inputRef = useRef<HTMLInputElement>()
  const handleCopy = () => {
    if(inputRef.current) {
      setIsCopying(true)
      inputRef.current.select()
      ;(inputRef as any).setSelectionRange?.(0, 99999)

      document.execCommand('copy')
      setTimeout(() => {
        setIsCopying(false)
      }, 1500)
    }
  }

  return (
    <>
      <StyledMenuItem onClick={handleOpen} className={classes.inviteMenu}>
        Invite People
        <StyledMenuItemAction>
          <PersonAdd className={classes.menuIcon} />
        </StyledMenuItemAction>
      </StyledMenuItem>
      <Dialog open={open} onClose={handleClose} maxWidth='xs'>
        <StyledDialogTitle>
          <Typography style={{ textTransform: 'uppercase', fontWeight: 600 }}>
            Invite friends to {server.title}
          </Typography>
        </StyledDialogTitle>
        <StyledDialogContent>
          <Typography
            variant='overline'
            style={{ color: '#8e9297', fontWeight: 600 }}
          >
            Or, send a server invite link to a friend
          </Typography>
          <StyledTextField
            inputRef={inputRef}
            fullWidth
            value={inviteLink}
            className={isCopying ? classes.greenBorder : ''}
            endAdornment={(
              <Button
                style={{ marginRight: 4, minWidth: 75 }}
                variant='contained'
                color='primary'
                onClick={handleCopy}
                className={isCopying ? classes.greenButton : ''}
              >
                {isCopying ? 'Copied' : 'Copy'}
              </Button>
            )}
          />
        </StyledDialogContent>
      </Dialog>
    </>
  )
}
export default InvitePeopleAction

const useStyles = makeStyles(theme => ({
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
  greenBorder: {
    borderColor: 'hsl(139,calc(var(--saturation-factor, 1)*47.3%),43.9%) !important'
  },
  greenButton: {
    background: 'hsl(139,calc(var(--saturation-factor, 1)*47.3%),43.9%) !important'
  }
}))