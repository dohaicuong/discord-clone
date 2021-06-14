import { makeStyles } from "@material-ui/core"
import { graphql } from "babel-plugin-relay/macro"
import { usePaginationFragment } from "react-relay"
import { MessageListPaginationQuery } from "./__generated__/MessageListPaginationQuery.graphql"
import { MessageList_messages$key } from "./__generated__/MessageList_messages.graphql"
import MessageGroup, { MessageGroupType } from './MessageGroup'
import useInfiniteScroll from 'react-infinite-scroll-hook'

// import InfiniteScroll from 'react-infinite-scroll-component'

type MessageListProps = {
  channel: MessageList_messages$key
}
const MessageList: React.FC<MessageListProps> = props => {
  const classes = useStyles()

  const { data, loadPrevious, hasPrevious, isLoadingPrevious } = usePaginationFragment<
    MessageListPaginationQuery,
    MessageList_messages$key
  >(
    graphql`
      fragment MessageList_messages on Channel
      @refetchable(queryName: "MessageListPaginationQuery")
      @argumentDefinitions(
        count: { type: "Int!", defaultValue: 30 },
        cursor: { type: "String", defaultValue: null },
      )
      {
        messages(last: $count, before: $cursor)
        @connection(key: "MessageList_messages")
        {
          edges {
            node {
              content
              createdAt
              author {
                id
                username
                avatar
                email
              }
            }
          }
        }
      }
    `,
    props.channel
  )

  const [sentryRef, { rootRef }] = useInfiniteScroll({
    loading: isLoadingPrevious,
    hasNextPage: hasPrevious,
    onLoadMore: () => loadPrevious(10),
    disabled: false,
    rootMargin: '0px 0px 400px 0px',
  })

  const messageGroups = data.messages.edges.reduce<MessageGroupType[]>((total, { node: message }) => {
    const lastGroup = total[total.length - 1]
    if(lastGroup?.author?.id === message.author?.id) {
      lastGroup.messages.push(message.content)
    }
    else {
      total.push({
        author: message.author,
        createdAt: message.createdAt,
        messages: [
          message.content
        ]
      })
    }

    return total
  }, [])

  return (
    <div className={classes.list} ref={rootRef}>
      {messageGroups.reverse().map((group, index) => (
        <div key={index} className={classes.item}>
          <MessageGroup key={index} messageGroup={group} />
        </div>
      ))}
      {(isLoadingPrevious || hasPrevious) && (
        <div className={classes.item} ref={sentryRef}>
          Loading...
        </div>
      )}
    </div>
  )
}
export default MessageList

const useStyles = makeStyles({
  list: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    transform: 'rotateX(180deg)',
  },
  item: {
    transform: 'rotateX(180deg)',
  }
})
