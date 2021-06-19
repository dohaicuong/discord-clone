import { graphql } from "babel-plugin-relay/macro"
import { useFragment } from "react-relay"

import { Collapse, List as MuiList, ListItem as MuiListItem, ListItemText as MuiListItemText, withStyles } from '@material-ui/core'
import { Add, ChevronRight, KeyboardArrowDown, } from '@material-ui/icons'
import { cloneElement, useState } from "react"
import { ChannelCategory_channelCategory$key } from "./__generated__/ChannelCategory_channelCategory.graphql"
import ServerChannelList from '../ServerChannelList'
import ActionAddChannelDialog from '../ActionAddChannelDialog'

type ChannelCategoryProps = {
  channelCategory: ChannelCategory_channelCategory$key
}
const ChannelCategory: React.FC<ChannelCategoryProps> = props => {
  const channelCategory = useFragment(
    graphql`
      fragment ChannelCategory_channelCategory on ChannelCategory {
        id
        name
        ...ServerChannelList_channelCategory
        ...ActionAddChannelDialog_channelCategory
      }
    `,
    props.channelCategory
  )

  const [menuOpen, setMenuOpen] = useState(true)
  const handleClick = () => setMenuOpen(pre => !pre)
    
  const [addChannelOpen, setAddChannelOpen] = useState(false)
  const handleAddChannelOpen = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation()
    setAddChannelOpen(true)
  }
  const handleAddChannelClose = () => setAddChannelOpen(false)
  
  return (
    <>
      <MuiList disablePadding style={{ marginTop: 16, height: 24 }}>
        <ListHeaderItem button onClick={handleClick}>
          <ListHeaderIcon on={menuOpen} onIcon={<KeyboardArrowDown />} offIcon={<ChevronRight />} />
          <ListHeaderText primary={channelCategory.name} />
          
          <Add style={{ width: 18, height: 18 }} onClick={handleAddChannelOpen} />
          <ActionAddChannelDialog
            channelCategory={channelCategory}
            open={addChannelOpen}
            handleClose={handleAddChannelClose}
          />
        </ListHeaderItem>
      </MuiList>
      <Collapse in={menuOpen} timeout='auto' unmountOnExit>
        <ServerChannelList channelCategory={channelCategory} />
      </Collapse>
    </>
  )
}
export default ChannelCategory

const ListHeaderItem = withStyles({
  root: {
    color: '#8e9297',
    padding: '0 8px 0 2px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:hover .MuiListItemText-primary': {
      color: '#dcddde'
    }
  }
})(MuiListItem)

type ListHeaderIconProps = {
  on: boolean
  onIcon: React.ReactElement
  offIcon: React.ReactElement
}
const ListHeaderIcon: React.FC<ListHeaderIconProps> = ({ on, onIcon, offIcon }) => {
  const style = { width: 12, height: 12, marginRight: 2 }
  if(on) return cloneElement(onIcon, { style })
  return cloneElement(offIcon, { style })
}

const ListHeaderText = withStyles({
  primary: {
    fontSize: 12,
    fontWeight: 600,
    color: '#8e9297',
    textTransform: 'uppercase',
  }
})(MuiListItemText)