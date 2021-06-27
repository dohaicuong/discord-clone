import { useFormContext } from 'react-hook-form'
import {
  FormControl,
  RadioGroup,
  List,
} from '@material-ui/core'
import StyledInputLabel from 'components/StyledInputLabel'

type RadioGroupListProps = {
  label: string
  name: string
}
const RadioGroupList: React.FC<RadioGroupListProps> = ({ label, name, children }) => {
  const { register } = useFormContext()

  return (
    <FormControl component='fieldset'>
      <StyledInputLabel shrink focused={false}>
        {label}
      </StyledInputLabel>
      <RadioGroup aria-label={name} {...register(name)}>
        <List>
          {children}
        </List>
      </RadioGroup>
    </FormControl>
  )
}
export default RadioGroupList
