import { graphql } from "babel-plugin-relay/macro"
import { useFragment } from "react-relay"
import ServerItem, { ServerItemProps } from "components/ServerItem"
import { ServerFragment_server$key } from "./__generated__/ServerFragment_server.graphql"

type ServerProps = Omit<ServerItemProps, 'id' | 'title'> & {
  server: ServerFragment_server$key
}
const Server: React.FC<ServerProps> = ({ server: serverProps, ...props }) => {
  const server = useFragment(
    graphql`
      fragment ServerFragment_server on Server {
        id
        title
        logo
      }
    `,
    serverProps
  )

  return (
    <ServerItem
      id={server.id}
      title={server.title}
      logo={server.logo ?? undefined}
      // badgeContent={3}
      {...props}
    />
  )
}
export default Server
