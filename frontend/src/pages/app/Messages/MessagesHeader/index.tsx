import { graphql } from 'babel-plugin-relay/macro'
import StyledHeader from 'components/StyledHeader'
import { Pound, Pin } from 'mdi-material-ui'
import { useFragment } from 'react-relay'
import { MessagesHeader_channel$key } from './__generated__/MessagesHeader_channel.graphql'
import StyledBadge from './StyledBadge'
import StyledIconButton from './StyledIconButton'
import { Notifications, PeopleAlt, Inbox, Help } from '@material-ui/icons'
import SearchInput from './SearchInput'

type MessagesHeaderProps = {
  channel: MessagesHeader_channel$key
}
const MessagesHeader: React.FC<MessagesHeaderProps> = props => {
  const channel = useFragment(
    graphql`
      fragment MessagesHeader_channel on Channel {
        name
      }
    `,
    props.channel
  )

  return (
    <StyledHeader style={{ cursor: 'auto' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Pound style={{ color: '#72767d', marginRight: 8 }} />
        <span style={{ fontSize: 16, fontWeight: 600 }}>
          {channel.name}
        </span>
      </div>
      <div style={{ flexGrow: 1 }} />
      <div style={{ display: 'flex' }}>
        <StyledIconButton>
          <Notifications />
        </StyledIconButton>
        <StyledBadge
          color='error'
          overlap='circle'
          badgeContent=' '
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <StyledIconButton>
            <Pin />
          </StyledIconButton>
          </StyledBadge>
          <StyledIconButton>
            <PeopleAlt />
          </StyledIconButton>
          <SearchInput />
          <StyledIconButton>
            <Inbox />
          </StyledIconButton>
          <StyledIconButton>
            <Help />
          </StyledIconButton>
      </div>
    </StyledHeader>
  )
}
export default MessagesHeader
