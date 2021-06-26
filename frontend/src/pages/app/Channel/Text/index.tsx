import { Grid } from '@material-ui/core'
import MessagesHeader from './MessagesHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import { useFragment } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'

type TextProps = {
  channelRef: any
}
const Text: React.FC<TextProps> = props => {
  const channel = useFragment(
    graphql`
      fragment Text_channel on Channel {
        ...MessagesHeader_channel
        ...MessageList_messages
      }
    `,
    props.channelRef
  )

  return (
    <>
      <Grid item style={{ height: 48, zIndex: 10 }}>
        <MessagesHeader channel={channel} />
      </Grid>
      <Grid item xs style={{ height: 'calc(100vh - 48px - 68px)'}}>
        <MessageList channel={channel} />
      </Grid>
      <Grid item style={{ height: 68 }}>
        <MessageForm />
      </Grid>
    </>
  )
}
export default Text
