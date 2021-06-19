import { useNavigate, useParams } from "react-router-dom"
import { useLazyLoadQuery, useMutation } from "react-relay"
import { graphql } from "babel-plugin-relay/macro"
import { makeStyles, Paper, Typography } from "@material-ui/core"

import CircularButton from 'components/CircularButton'
import Button from 'components/Button'
import backgroundDark from 'resources/auth_background_dark.jpg'
import DiscordLogo from 'resources/DiscordLogo'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

import { inviteQuery } from "./__generated__/inviteQuery.graphql"
import { inviteServerJoinMutation } from "./__generated__/inviteServerJoinMutation.graphql"
import { useSnackbar } from "notistack"

const InviteUser = () => {
  const classes = useStyles()
  const { serverId, hostId } = useParams()

  const data = useLazyLoadQuery<inviteQuery>(
    graphql`
      query inviteQuery($hostId: ID!, $serverId: ID!) {
        host: node(id: $hostId) {
          ... on User {
            username
          }
        }

        server: node(id: $serverId) {
          ... on Server {
            title
            logo
            serverUsers(first: 1) {
              totalCount
            }
          }
        }
      }
    `,
    {
      hostId,
      serverId,
    }
  )

  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const [commit] = useMutation<inviteServerJoinMutation>(graphql`
    mutation inviteServerJoinMutation($input: ServerJoinInput!) {
      serverJoinUser(input: $input) {
        userServer {
          id
        }
      }
    }
  `)
  const joinServer = () => {
    commit({
      variables: {
        input: { serverId }
      },
      onCompleted: (res, errors) => {
        if(errors) return errors.forEach(error => enqueueSnackbar(error.message, { variant: 'error' }))

        navigate(`/${serverId}`)
      }
    })
  }
  
  if(!data.server || !data.host) return <>Something went wrong</>

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div style={{ maxWidth: 1480, display: 'flex', justifyContent: 'center' }}>
          <Paper style={{ padding: 32, width: 'fit-content', backgroundColor: '#36393f' }}>
            <CircularButton
              selected={true}
              image={data.server.logo ?? undefined}
              icon={!data.server.logo && <DiscordLogo />}
              color='primary'
              style={{ cursor: 'auto', margin: '0 auto 24px' }}
            />
            <Typography variant='body1' style={{ color: '#b9bbbe', textAlign: 'center' }} gutterBottom>
              {data.host.username} invited you to join
            </Typography>
            <Typography variant='h4' style={{ textAlign: 'center' }} gutterBottom>
              {data.server.title}
            </Typography>
            <Typography variant='body1' style={{ color: '#b9bbbe', display:'flex', justifyContent: 'center' }}>
              <FiberManualRecordIcon fontSize='small' />
              {data.server.serverUsers?.totalCount} Members
            </Typography>
            <Button
              variant='contained'
              color='primary'
              style={{ marginTop: 40, minWidth: 416, height: 44 }}
              onClick={joinServer}
            >
              Accept Invite
            </Button>
          </Paper>
        </div>
      </div>
    </div>
  )
}
export default InviteUser

const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url("${backgroundDark}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    zIndex: 10,
    width: '100%',
  }
})
