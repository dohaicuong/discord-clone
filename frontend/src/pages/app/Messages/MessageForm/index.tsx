import { InputBase, makeStyles, Paper } from '@material-ui/core'
import { AddCircle, CardGiftcard, Gif, EmojiEmotions } from '@material-ui/icons'
import StyledIconButton from './StyledIconButton'
import { FormProvider, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useMutation } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { MessageFormSendMessageMutation } from './__generated__/MessageFormSendMessageMutation.graphql'

type Inputs = {
  message: string
}

const MessageForm = () => {
  const classes = useStyles()
  const { channelId } = useParams()

  const [sendMessage] = useMutation<MessageFormSendMessageMutation>(graphql`
    mutation MessageFormSendMessageMutation($input: MessageCreateInput!, $connections: [ID!]!) {
      messageCreate(input: $input) {
        message
        @appendNode(
          edgeTypeName: "Message"
          connections: $connections
        )
        {
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
  `)

  const methods = useForm<Inputs>()
  const onSubmit = (data: Inputs) => {
    sendMessage({
      variables: {
        input: {
          channelId,
          content: data.message,
        },
        connections: [
          `client:${channelId}:__MessageList_messages_connection`,
        ]
      },
      onCompleted: () => {
        methods.reset()
      }
    })
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} style={{ height: '100%', width: '100%', padding: '0 16px' }}>
      <Paper className={classes.root}>
          <StyledIconButton style={{ padding: 0, margin: '0 16px 0 0' }}>
            <AddCircle />
          </StyledIconButton>
          <InputBase
            classes={{
              root: classes.inputRoot,
              input: classes.input,
            }}
            placeholder='Message'
            autoComplete='off'
            autoFocus
            {...methods.register('message')}
          />
          <div style={{ display: 'flex' }}>
            <StyledIconButton style={{ margin: '0 4px' }}>
              <CardGiftcard />
            </StyledIconButton>
            <StyledIconButton style={{ margin: '0 4px' }}>
              <Gif />
            </StyledIconButton>
            <StyledIconButton style={{ margin: '0 4px' }}>
              <EmojiEmotions />
            </StyledIconButton>
          </div>
        </Paper>
      </form>
    </FormProvider>
  )
}
export default MessageForm


const useStyles = makeStyles(theme => ({
  root: {
    height: 44,
    margin: 0,
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    color: '#dcddde',
    backgroundColor: '#40444b',
    borderRadius: 8,
    boxShadow: 'none',
  },
  inputRoot: {
    width: '100%',
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 20,
    overflow: 'hidden',
    padding: '11px 0',
    cursor: 'text',
    width: '100%',
    height: 22,
    color: '#cacaca'
  },
  icon: {
    width: 18,
    height: 18,
    color: '#979899'
  },
}))


