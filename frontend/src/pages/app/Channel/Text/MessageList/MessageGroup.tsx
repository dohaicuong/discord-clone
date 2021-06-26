import { Avatar, Typography, makeStyles } from '@material-ui/core'
import DiscordLogo from 'resources/DiscordLogo'
import { format as formatTime } from 'timeago.js'

export type MessageGroupType = {
  author: {
    id: string
    username: string
    avatar: string | null
  } | null
  messages: string[]
  createdAt: string
}
type MessageGroupProps = {
  messageGroup: MessageGroupType
}
const MessageGroup: React.FC<MessageGroupProps> = ({ messageGroup: { author, messages, createdAt } }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Avatar className={classes.avatar} src={author?.avatar ?? undefined}>
        {!author?.avatar && <DiscordLogo />}
      </Avatar>
      <div className={classes.contentContainer}>
        <Typography variant='subtitle2'>
          {author?.username}
          <span className={classes.time}>{formatTime(createdAt)}</span>
        </Typography>
        {messages.map((message, index) => (
          <Typography
            key={index}
            variant='body1'
            className={classes.messageParagraph}
          >
            {message}
          </Typography>
        ))}
      </div>
    </div>
  )
}
export default MessageGroup

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%', 
    backgroundColor: '#36393f',
    display: 'flex', 
    padding: '0 0 0 16px', 
    color: 'white',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    overflow: 'hidden',
    cursor: 'pointer',
    marginTop: 16,
  },
  contentContainer: {
    alignItems: 'center',
    marginLeft: 16,
    marginTop: 16,
    width: '100%',
  },
  time: {
    color: 'gray',
    marginLeft: '5px',
    fontSize: 'x-small',
  },
  messageParagraph: {
    margin: 0,
    width: '100%',
    '&:hover': { 
      backgroundColor: 'rgba(4,4,5,0.07)',
    }
  }
}))