import { FormControl, InputBaseProps } from '@material-ui/core'
import { RegisterOptions, FieldValues, useFormContext, useFormState } from 'react-hook-form'

import StyledInputLabel from './StyledInputLabel'
import StyledTextField from './StyledTextField'

type InputTextFieldProps = InputBaseProps & {
  name: string
  label?: string
  validate?: RegisterOptions<FieldValues, any>
}

const InputTextField: React.FC<InputTextFieldProps> = ({ 
  name,
  label,
  validate,
  ...props
}) => {
  const { register } = useFormContext()
  const { errors } = useFormState()
  const error = errors[name]

  return (
    <FormControl fullWidth error={Boolean(error)}>
      <StyledInputLabel shrink focused={false}>
        {label}
        {error && (
          <span style={{ fontStyle: 'italic' }}>
          {''} - {error.message}
          </span>
        )}
      </StyledInputLabel>
      <StyledTextField fullWidth {...register(name, validate)} {...props} />
    </FormControl>
  )
}
export default InputTextField
