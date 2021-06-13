import { useFragment } from "react-relay"
import { graphql } from "babel-plugin-relay/macro"

import React, { cloneElement } from "react"
import { ListItem as MuiListItem, ListItemText as MuiListItemText, withStyles } from '@material-ui/core'
// import { Book, VolumeUp } from '@material-ui/icons'
import { Pound } from 'mdi-material-ui' // Bullhorn
import { ServerChannel_channel$key } from "./__generated__/ServerChannel_channel.graphql"
import { useNavigate, useMatch } from "react-router-dom"

type ServerChannelProps = {
  channel: ServerChannel_channel$key
}
const ServerChannel: React.FC<ServerChannelProps> = props => {
  const navigate = useNavigate()
  const match = useMatch('/:serverId/:channelId')

  const channel = useFragment(
    graphql`
      fragment ServerChannel_channel on Channel {
        id
        name
      }
    `,
    props.channel
  )
  
  const notice = false
  return (
    <ListItem
      button
      selected={channel.id === match?.params.channelId}
      onClick={() => navigate(channel.id)}
    >
      {notice && <ListItemNotice />}
      <ListItemIcon>
        <Pound />
      </ListItemIcon>
      <ListItemText primary={channel.name} />
    </ListItem>
  )
}
export default ServerChannel

const ListItem = withStyles({
  root: {
    width: 228,
    margin: '1px 0 1px 8px',
    padding: '0 8px',
    color: '#8e9297',
    borderRadius: 4,
    '&:hover': {
      backgroundColor: '#393d42',
      opacity: 0.8,
    },
    '&:hover .MuiListItemText-primary': {
      color: '#dcddde',
    }
  },
  selected: {
    backgroundColor: '#393d42 !important',
    opacity: 1,
    '& .MuiListItemText-primary': {
      color: '#fff !important',
    }
  }
})(MuiListItem)

const ListItemText = withStyles({
  primary: {
    fontWeight: 500
  }
})(MuiListItemText)

const ListItemIcon: React.FC<any> = ({ children, style = {} }) => {
  const elements = React.Children.toArray(children)
  return (
    <>
      {elements.map(element => cloneElement(element as any, {
        style: {
          width: 20,
          height: 20,
          marginRight: 6,
          ...style,
        }
      }))}
    </>
  )
}

const ListItemNotice = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: -10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 8,
        height: 32,
      }}
    >
      <span
        style={{
          display: 'block',
          backgroundColor: '#fff',
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
          width: 4,
          height: 8,
          transition: 'height 50ms ease-in-out'
        }}
      />
    </div>
  )
}
