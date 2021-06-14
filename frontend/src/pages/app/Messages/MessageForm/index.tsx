import { InputBase, makeStyles, Paper } from '@material-ui/core'
import { AddCircle, CardGiftcard, Gif, EmojiEmotions } from '@material-ui/icons'
// import StyledIconButton from './StyledIconButton'
import { FormProvider, useForm } from 'react-hook-form'

type Inputs = {
  message: string
}

const MessageForm = () => {
  const methods = useForm<Inputs>()
  const onSubmit = (data: Inputs) => {
    console.log(data)
    methods.reset()
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} style={{ height: '100%', width: '100%', padding: '0 16px' }}>
        message form
      </form>
    </FormProvider>
  )
}
export default MessageForm
