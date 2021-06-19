import StyledMenuItem from 'components/StyledMenuItem'
import { useState } from 'react'
import { Dialog, makeStyles, Typography } from '@material-ui/core'
import StyledDialogTitle from 'components/StyledDialogTitle'
import StyledDialogContent from 'components/StyledDialogContent'
import StyledDialogActions from 'components/StyledDialogActions'
import StyledButton from 'components/Button'
import { FormProvider, useForm } from 'react-hook-form'
import InputTextField from 'components/InputTextField'
import { useMutation } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { useParams } from 'react-router-dom'
import { ActionCreateCategoryMutation, ChannelCategoryCreateInput } from './__generated__/ActionCreateCategoryMutation.graphql'
import { useSnackbar } from 'notistack'

type Inputs = Omit<ChannelCategoryCreateInput, 'serverId'>
type ActionCreateCategoryProps = {
  closeMenu: () => void
}
const ActionCreateCategory: React.FC<ActionCreateCategoryProps> = ({ closeMenu, ...props }) => {
  const classes = useStyles()
  const { serverId } = useParams()
  const { enqueueSnackbar } = useSnackbar()

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [commit, isInFlight] = useMutation<ActionCreateCategoryMutation>(graphql`
    mutation ActionCreateCategoryMutation($input: ChannelCategoryCreateInput!, $connections: [ID!]!) {
      channelCategoryCreate(input: $input) {
        channelCategory
        @appendNode(
          edgeTypeName: "Channel"
          connections: $connections
        )
        {
          id
          ...ChannelCategory_channelCategory
        }
      }
    }
  `)

  const methods = useForm<Inputs>()
  const categoryName = methods.watch('name')
  const onSubmit = (data: Inputs) => {
    commit({
      variables: {
        input: {
          serverId,
          name: data.name
        },
        connections: [
          `client:${serverId}:__ServerChannelCategoryList_channelCategories_connection`
        ]
      },
      onCompleted: (res, errors) => {
        if(errors) return errors.forEach(error => enqueueSnackbar(error.message, { variant: 'error' }))

        closeMenu()
        handleClose()
      }
    })
  }

  return (
    <>
      <StyledMenuItem onClick={handleOpen}>
        Create Category
      </StyledMenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth='xs' 
        PaperProps={{ className: classes.paper }}
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} style={{ marginTop: 20 }}>
            <StyledDialogTitle>
              <Typography variant='h4' style={{ fontWeight: 600, textAlign: 'center' }}>
                Create Category
              </Typography>
            </StyledDialogTitle>

            <StyledDialogContent>
              <InputTextField
                label='Category Name'
                name='name'
                autoFocus
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
                disabled={!categoryName || isInFlight}
              >
                Create Category
              </StyledButton>
            </StyledDialogActions>
          </form>
        </FormProvider>
      </Dialog>
    </>
  )
}
export default ActionCreateCategory

const useStyles = makeStyles({
  paper: {
    width: '100%'
  }
})