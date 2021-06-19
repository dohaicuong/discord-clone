import { FormProvider, useForm } from 'react-hook-form'
import { Dialog, makeStyles, Typography, InputAdornment } from '@material-ui/core'
import StyledDialogTitle from 'components/StyledDialogTitle'
import StyledDialogContent from 'components/StyledDialogContent'
import StyledDialogActions from 'components/StyledDialogActions'
import StyledButton from 'components/Button'
import InputTextField from 'components/InputTextField'
import { Pound } from 'mdi-material-ui'
import { useFragment, useMutation } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { ActionAddChannelDialog_channelCategory$key } from './__generated__/ActionAddChannelDialog_channelCategory.graphql'
import { ActionAddChannelDialogMutation, ChannelCreateInput } from './__generated__/ActionAddChannelDialogMutation.graphql'
import { useSnackbar } from 'notistack'

type Inputs = Omit<ChannelCreateInput, 'channelCategoryId'>

type ActionAddChannelDialogProps = {
  open: boolean
  handleClose: () => void
  channelCategory: ActionAddChannelDialog_channelCategory$key
}
const ActionAddChannelDialog: React.FC<ActionAddChannelDialogProps> = ({ open, handleClose, ...props }) => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()

  const channelCategory = useFragment(
    graphql`
      fragment ActionAddChannelDialog_channelCategory on ChannelCategory {
        id
        name
      }
    `,
    props.channelCategory
  )

  const [commit, isInFlight] = useMutation<ActionAddChannelDialogMutation>(graphql`
    mutation ActionAddChannelDialogMutation($input: ChannelCreateInput!, $connections: [ID!]!) {
      channelCreate(input: $input) {
        channel
        @appendNode(
          edgeTypeName: "Channel"
          connections: $connections
        )
        {
          ...ServerChannel_channel
        }
      }
    }
  `)
  const methods = useForm<Inputs>()
  const channelName = methods.watch('name')
  const onSubmit = (data: Inputs) => {
    commit({
      variables: {
        input: {
          channelCategoryId: channelCategory.id,
          name: data.name
        },
        connections: [
          `client:${channelCategory.id}:__ServerChannelList_channels_connection`
        ]
      },
      onCompleted: (res, errors) => {
        if(errors) return errors.forEach(error => enqueueSnackbar(error.message, { variant: 'error' }))

        handleClose()
      }
    })
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth='xs' 
      PaperProps={{ className: classes.paper }}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <StyledDialogTitle>
            <Typography variant='h4' style={{ fontWeight: 600, textAlign: 'center' }}>
              Create Text Channel
            </Typography>
            <Typography variant='body2' component='p' style={{ color: '#b9bbbe', textAlign: 'center' }}>
              in {channelCategory.name}
            </Typography>
          </StyledDialogTitle>

          <StyledDialogContent>
            <InputTextField
              label='Channel Name'
              name='name'
              startAdornment={
                <InputAdornment position='start'>
                  <Pound />
                </InputAdornment>
              }
              disabled={isInFlight}
            />
          </StyledDialogContent>

          <StyledDialogActions>
            <div style={{ flexGrow: 1 }} />
            <StyledButton onClick={handleClose}>
              Cancel
            </StyledButton>
            <StyledButton
              type='submit'
              color='primary'
              variant='contained'
              autoFocus
              disabled={!channelName || isInFlight}
            >
              Create Channel
            </StyledButton>
          </StyledDialogActions>
        </form>
      </FormProvider>
    </Dialog>
  )
}
export default ActionAddChannelDialog

const useStyles = makeStyles({
  paper: {
    width: '100%'
  }
})