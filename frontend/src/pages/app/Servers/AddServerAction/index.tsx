import { Add } from '@material-ui/icons'
import { useState } from 'react'
import ServerItem from 'components/ServerItem'
import { FormProvider, useForm } from 'react-hook-form'
import { Dialog, Typography } from '@material-ui/core'
import StyledDialogTitle from 'components/StyledDialogTitle'
import StyledDialogContent from 'components/StyledDialogContent'
import StyledDialogActions from 'components/StyledDialogActions'
import StyledDropzone from 'components/StyledDropzone'
import Link from 'components/Link'
import InputTextField from 'components/InputTextField'
import StyledButton from 'components/Button'
import { useFragment, useMutation } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { AddServerAction_user$key } from './__generated__/AddServerAction_user.graphql'
import { AddServerActionMutation } from './__generated__/AddServerActionMutation.graphql'
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'

type AddServerActionProps = {
  user: AddServerAction_user$key
}
const AddServerAction: React.FC<AddServerActionProps> = props => {
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const user = useFragment(
    graphql`
      fragment AddServerAction_user on User {
        id
        username
      }
    `,
    props.user
  )

  const [commit, isOnFly] = useMutation<AddServerActionMutation>(graphql`
    mutation AddServerActionMutation($input: ServerCreateInput!, $connections: [ID!]!) {
      serverCreate(input: $input) {
        userServer
        @appendNode(
          edgeTypeName: "UsersOnServersEdge"
          connections: $connections
        )
        {
          id
          server {
            id
            title
            logo
          }
        }
      }
    }
  `)

  const methods = useForm<any>()
  const onSubmit = (data: any) => {
    commit({
      variables: {
        input: data,
        connections: [
          `client:${user.id}:__Servers_userServers_connection`,
        ]
      },
      onCompleted: (res, errors) => {
        if(errors) return errors.forEach(error => enqueueSnackbar(error.message, { variant: 'error' }))
        if(!res.serverCreate.userServer) return void enqueueSnackbar('Something went wrong', { variant: 'error' })
        
        handleClose()
        navigate(res.serverCreate.userServer.server.id)
      }
    })
  }

  return (
    <>
      <ServerItem
        title='Add a Server'
        icon={<Add />}
        color='secondary'
        onClick={handleOpen}
      />
      <Dialog open={open} onClose={handleClose} maxWidth='xs'>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <StyledDialogTitle>
              <Typography variant='h5' component='p' style={{ textAlign: 'center', fontWeight: 700 }}>
                Customize your server
              </Typography>
              <Typography
                variant='subtitle1'
                component='p'
                style={{ textAlign: 'center', marginTop: 8, color: '#c5c5c5' }}
              >
                Give your new server a personality with a name and an icon. You can always change it later.
              </Typography>
            </StyledDialogTitle>

            <StyledDialogContent>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <StyledDropzone name='logo' style={{ marginBottom: 32 }} />
              </div>
              <InputTextField
                name='title'
                label='SERVER NAME'
                validate={{ required: true }}
                defaultValue={`${user.username}'s server`}
                disabled={isOnFly}
                style={{ marginBottom: 20 }}
              />
              <InputTextField
                name='nickname'
                label='YOUR NICK NAME'
                defaultValue={user.username}
                disabled={isOnFly}
                style={{ marginBottom: 20 }}
              />
              <Typography variant='caption' style={{ color: '#8e9297' }}>
                By creating a server, you agree to Discord's
                <Link> Community Guidelines</Link>.
              </Typography>
            </StyledDialogContent>

            <StyledDialogActions>
              <StyledButton onClick={handleClose}>
                Back
              </StyledButton>
              <div style={{ flexGrow: 1 }} />
              <StyledButton
                type='submit'
                color='primary'
                variant='contained'
                autoFocus
                disabled={isOnFly}
              >
                Create
              </StyledButton>
            </StyledDialogActions>
          </form>
        </FormProvider>
      </Dialog>
    </>
  )
}
export default AddServerAction
