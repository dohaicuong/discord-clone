import { graphql } from "babel-plugin-relay/macro"
import { usePaginationFragment } from "react-relay"
import { ServerChannelCategoryList_server$key } from "./__generated__/ServerChannelCategoryList_server.graphql"
import ChannelCategory from './ChannelCategory'
import { ServerChannelCategoryListPaginationQuery } from "./__generated__/ServerChannelCategoryListPaginationQuery.graphql"
import StyledMenu from 'components/StyledMenu'
import { useState } from "react"
import ActionCreateCategory from './ActionCreateCategory'

const initialState = {
  mouseX: null,
  mouseY: null,
}

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

  const [state, setState] = useState<{mouseX: null | number, mouseY: null | number}>(initialState)
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    })
  }
  const handleClose = () => {
    setState(initialState)
  }

  return (
    <div onContextMenu={handleClick} style={{ minHeight: '98%' }}>
      {data.channelCategories.edges.map(({ node }) => (
        <ChannelCategory key={node.id} channelCategory={node} />
      ))}

      <StyledMenu
        keepMounted
        open={state.mouseY !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          state.mouseY !== null && state.mouseX !== null
            ? { top: state.mouseY, left: state.mouseX }
            : undefined
        }
      >
        <ActionCreateCategory closeMenu={handleClose} />
      </StyledMenu>
    </div>
  )
}
export default ServerChannelCategoryList
