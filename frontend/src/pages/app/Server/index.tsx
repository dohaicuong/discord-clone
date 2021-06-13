import { graphql } from "babel-plugin-relay/macro"
import { useLazyLoadQuery } from "react-relay"
import { useParams, Outlet } from "react-router-dom"
import { ServerQuery } from "./__generated__/ServerQuery.graphql"
import { Grid } from '@material-ui/core'
import ServerHeader from './ServerHeader'
import ServerFooter from './ServerFooter'
import ServerChannelCategoryList from './ServerChannelCategoryList'

const Server = () => {
  const { serverId } = useParams()

  const data = useLazyLoadQuery<ServerQuery>(
    graphql`
      query ServerQuery($serverId: ID!) {
        server: node(id: $serverId) {
          id
          ...ServerHeader_server
          ...ServerFooter_server
          ...ServerChannelCategoryList_server
        }
      }
    `,
    { serverId }
  )
    
  if(!data.server) return <>Server is down!</>

  return (
    <Grid container>
      <Grid item container direction='column' style={{ position: 'relative', width: 240, height: '100vh' }}>
        <Grid item>
          <ServerHeader server={data.server} />
        </Grid>
        <Grid item xs style={{ overflow: 'auto' }}>
          <ServerChannelCategoryList server={data.server} />
        </Grid>
        <Grid item>
          <ServerFooter server={data.server} />
        </Grid>
      </Grid>
      <Grid item xs style={{ background: '#36393f' }}>
        <Outlet />
      </Grid>
    </Grid>
  )
}
export default Server
