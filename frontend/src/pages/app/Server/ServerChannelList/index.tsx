import { graphql } from "babel-plugin-relay/macro"
import { usePaginationFragment } from "react-relay"
import { ServerChannelListPaginationQuery } from "./__generated__/ServerChannelListPaginationQuery.graphql"
import { ServerChannelList_channelCategory$key } from "./__generated__/ServerChannelList_channelCategory.graphql"
import ServerChannel from './ServerChannel'
import { List as MuiList } from '@material-ui/core'

type ServerChannelListProps = {
  channelCategory: ServerChannelList_channelCategory$key
}
const ServerChannelList: React.FC<ServerChannelListProps> = props => {
  const { data } = usePaginationFragment<
    ServerChannelListPaginationQuery,
    ServerChannelList_channelCategory$key
  >(
    graphql`
      fragment ServerChannelList_channelCategory on ChannelCategory
      @refetchable(queryName: "ServerChannelListPaginationQuery")
      @argumentDefinitions(
        count: { type: "Int!", defaultValue: 10 },
        cursor: { type: "String", defaultValue: null },
      )
      {
        channels(first: $count, after: $cursor)
        @connection(key: "ServerChannelList_channels")
        {
          edges {
            node {
              id
              ...ServerChannel_channel
            }
          }
        }
      }
    `,
    props.channelCategory
  )

  return (
    <MuiList component='div' disablePadding>
      {data.channels.edges.map(({ node }) => (
        <ServerChannel key={node.id} channel={node} />
      ))}
    </MuiList>
  )
}
export default ServerChannelList
