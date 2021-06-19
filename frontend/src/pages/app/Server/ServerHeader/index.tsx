import { graphql } from "babel-plugin-relay/macro"
import { useFragment } from "react-relay"
import StyledHeader from 'components/StyledHeader'
import { Grid } from '@material-ui/core'
import { KeyboardArrowDown, Close } from '@material-ui/icons'
import BootIcon from 'resources/BootIcon'
import { useState } from "react"
import { ServerHeader_server$key } from "./__generated__/ServerHeader_server.graphql"
import ServerHeaderMenu from "./ServerHeaderMenu"
import { ServerHeader_me$key } from "./__generated__/ServerHeader_me.graphql"

type ServerHeaderProps = {
  me: ServerHeader_me$key
  server: ServerHeader_server$key
}
const ServerHeader: React.FC<ServerHeaderProps> = props => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleClick = (event: React.MouseEvent<HTMLHeadingElement>) => setAnchorEl(event.currentTarget)
  const handleClose = () => {
    setAnchorEl(null)
  }

  const me = useFragment(
    graphql`
      fragment ServerHeader_me on User {
        ...ServerHeaderMenu_me
      }
    `,
    props.me
  )

  const server = useFragment(
    graphql`
      fragment ServerHeader_server on Server {
        title
        ...ServerHeaderMenu_server
      }
    `,
    props.server
  )

  return (
    <>
      <StyledHeader onClick={handleClick}>
        <Grid container spacing={1}>
          <Grid style={{ width: 16 }}>
            <BootIcon />
          </Grid>
          <Grid item xs
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontWeight: 600,
            }}
          >
            {server.title}
          </Grid>
          <Grid style={{ width: 24, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {!Boolean(anchorEl) ? <KeyboardArrowDown /> : <Close />}
          </Grid>
        </Grid>
      </StyledHeader>
      <ServerHeaderMenu
        me={me}
        server={server}
        anchorEl={anchorEl}
        onClose={handleClose}
      />
    </>
  )
}
export default ServerHeader

