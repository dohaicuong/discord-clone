import { graphql } from "babel-plugin-relay/macro"
import { usePaginationFragment } from "react-relay"
import { ServerChannelCategoryList_server$key } from "./__generated__/ServerChannelCategoryList_server.graphql"
import ChannelCategory from './ChannelCategory'
import { ServerChannelCategoryListPaginationQuery } from "./__generated__/ServerChannelCategoryListPaginationQuery.graphql"

type ServerChannelCategoryListProps = {
  server: ServerChannelCategoryList_server$key
}
const ServerChannelCategoryList: React.FC<ServerChannelCategoryListProps> = props => {
  const { data } = usePaginationFragment<
    ServerChannelCategoryListPaginationQuery,
    ServerChannelCategoryList_server$key
  >(
    graphql`
      fragment ServerChannelCategoryList_server on Server
      @refetchable(queryName: "ServerChannelCategoryListPaginationQuery")
      @argumentDefinitions(
        count: { type: "Int!", defaultValue: 10 },
        cursor: { type: "String", defaultValue: null },
      )
      {
        channelCategories(first: $count, after: $cursor)
        @connection(key: "ServerChannelCategoryList_channelCategories")
        {
          edges {
            node {
              id
              ...ChannelCategory_channelCategory
            }
          }
        }
      }
    `,
    props.server
  )

  return (
    <>
      {data.channelCategories.edges.map(({ node }) => (
        <ChannelCategory key={node.id} channelCategory={node} />
      ))}
    </>
  )
}
export default ServerChannelCategoryList
