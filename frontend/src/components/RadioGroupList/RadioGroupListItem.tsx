import {
  FormControlLabel, Radio,
  ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core'

type RadioGroupListItemProps = {
  title: string
  subtitle: string
  value: string
  disabled?: boolean
  leadIcon?: any
}

const RadioGroupListItem: React.FC<RadioGroupListItemProps> = ({ title, subtitle, value, disabled, leadIcon }) => {
  return (
    <FormControlLabel
      value={value}
      label=''
      control={
        <ListItem button disabled={disabled}>
          <ListItemIcon>
            <Radio
              // checked={selected === value}
              value={value}
              disabled={disabled}
            />
            {leadIcon}
          </ListItemIcon>
          <ListItemText
            primary={title}
            secondary={subtitle}
          />
        </ListItem>
      }
    />
  )
}
export default RadioGroupListItem
