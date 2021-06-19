import { ListItemIcon } from '@material-ui/core'
import CircularButton from 'components/CircularButton'
import StyledDivider from 'components/StyledDivider'
import StyledBadge from 'components/StyledBadge'
import ServerListItem from './ServerListItem'
import DiscordLogo from 'resources/DiscordLogo'

export type ServerItemProps = {
  id?: string
  title: string
  logo?: string
  icon?: React.ReactElement
  status?: 'active' | 'notice'
  badgeContent?: React.ReactNode
  color?: 'primary' | 'secondary'
  borderBottom?: boolean
  onClick?: (id?: string) => void
}
const ServerItem: React.FC<ServerItemProps> = ({ id, badgeContent, title, logo, icon, status, onClick, borderBottom = false, color, ...props }) => {
  
  return (
    <>
      <ServerListItem
        style={{ marginBottom: 8 }}
        onClick={() => onClick?.(id)}
        status={status as any}
      >
        <ListItemIcon style={{ margin: 'auto' }}>
          <StyledBadge
            style={{ margin: 'auto' }}
            badgeContent={badgeContent}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            color='error'
            overlap='circle'
          >
            <CircularButton
              selected={status === 'active'}
              title={title}
              image={logo}
              icon={!logo && !icon ? <DiscordLogo /> : icon}
              color={color}
              textColor={color === 'primary' ? '#dcddde' : undefined}
            />
          </StyledBadge>
        </ListItemIcon>
      </ServerListItem>
      {borderBottom && <StyledDivider style={{ marginBottom: 8 }} />}
    </>
  )
}
export default ServerItem
