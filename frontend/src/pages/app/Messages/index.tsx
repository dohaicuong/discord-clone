import { Grid } from '@material-ui/core'
import { graphql } from 'babel-plugin-relay/macro'
import { useLazyLoadQuery } from 'react-relay'
import { useParams } from 'react-router-dom'
import MessagesHeader from './MessagesHeader'
import { MessagesQuery } from './__generated__/MessagesQuery.graphql'
import { Helmet } from 'react-helmet'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

const Messages = () => {
  const params = useParams()
  const data = useLazyLoadQuery<MessagesQuery>(
    graphql`
      query MessagesQuery($channelId: ID!) {
        channel: node(id: $channelId) {
          ...MessagesHeader_channel
          ...MessageList_messages

          ... on Channel {
            name
          }
        }
      }
    `,
    { channelId: params.channelId }
  )
  if(!data.channel) return <>Channel is not found!</>

  return (
    <>
      <Helmet>
        <title>{data.channel.name}</title>
      </Helmet>
      <Grid container direction='column' style={{ width: '100%', height: '100vh' }}>
        <Grid item style={{ height: 48, zIndex: 10 }}>
          <MessagesHeader channel={data.channel} />
        </Grid>
        <Grid item xs style={{ height: 'calc(100vh - 48px - 68px)'}}>
          <MessageList channel={data.channel} />
        </Grid>
        <Grid item style={{ height: 68 }}>
          <MessageForm />
        </Grid>
      </Grid>
    </>
  )
}
export default Messages
