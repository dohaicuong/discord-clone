import { useMatch } from "react-router-dom"

export const useServerId = () => {
  const match = useMatch('/:serverId')
  const match2 = useMatch('/:serverId/:channelId')
  return match?.params.serverId || match2?.params.serverId
}
