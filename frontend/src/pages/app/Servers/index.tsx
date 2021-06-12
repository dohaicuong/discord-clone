import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useServerId } from './useServerId'
import { useKickUser } from './useKickUser'

import { Grid, List } from '@material-ui/core'
import ServerItem from './Server/ServerItem'
import DiscordLogo from 'resources/DiscordLogo'
import { usePaginationFragment } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { ServerListPaginationQuery } from './__generated__/ServerListPaginationQuery.graphql'
import { ServersFragment_userServers$key } from './__generated__/ServersFragment_userServers.graphql'
import { Explore, GetApp } from '@material-ui/icons'
import Server from './Server'
import AddServerAction from './AddServerAction'

type ServersProps = {
  userServers: ServersFragment_userServers$key
}

const Servers: React.FC<ServersProps> = props => {
  useKickUser()

  const navigate = useNavigate()
  const currentServerId = useServerId()
  const navigateServer = useCallback((serverId) => {
    if (currentServerId !== serverId) navigate(serverId)
  }, [currentServerId, navigate])

  const { data } = usePaginationFragment<
    ServerListPaginationQuery,
    ServersFragment_userServers$key
  >(
    graphql`
      fragment ServersFragment_userServers on User
      @refetchable(queryName: "ServerListPaginationQuery")
      @argumentDefinitions(
        count: { type: "Int!", defaultValue: 10 },
        cursor: { type: "String", defaultValue: null },
      )
      {
        userServers(first: $count, after: $cursor)
        @connection(key: "Servers_userServers")
        {
          edges {
            node {
              id
              server {
                id
                ...ServerFragment_server
              }
            }
          }
        }

        ...AddServerAction_user
      }
    `,
    props.userServers
  )

  return (
    <Grid container>
      <Grid item style={{ width: 72, height: '100vh', background: '#202225' }}>
        <List style={{ paddingTop: 12, height: '100%', overflow: 'auto' }}>
          <ServerItem
            id='@me'
            title='Home'
            icon={<DiscordLogo />}
            status={currentServerId === '@me' ? 'active' : undefined}
            color='primary'
            onClick={id => id ? navigateServer(id) : undefined}
            borderBottom
          />

          {data.userServers?.edges?.map(({ node: { server }}) => {
            return (
              <Server
                key={server.id}
                server={server}
                status={currentServerId === server.id ? 'active' : undefined} // notice
                onClick={() => navigateServer(server.id)}
              />
            )
          })}

          <AddServerAction user={data} />

          <ServerItem
            title='Explore Public Server'
            icon={<Explore />}
            color='secondary'
            onClick={() => console.log('Explore Public Server')}
            borderBottom
          />
          <ServerItem
            title='Download Apps'
            icon={<GetApp />}
            color='secondary'
            onClick={() => console.log('Download Apps')}
          />
        </List>
      </Grid>
    </Grid>
  )
}
export default Servers

