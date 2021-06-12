import { Paper, Typography } from '@material-ui/core'
import Button from 'components/Button'
import InputTextField from 'components/InputTextField'
import Link from 'components/Link'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import AuthFormTransition from '../AuthFormTransition'
import { useMutation } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { signupMutation, SignupMutationInput } from './__generated__/signupMutation.graphql'
import { useSnackbar } from 'notistack'

const Signup = () => {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const [commit, isInFlight] = useMutation<signupMutation>(graphql`
    mutation signupMutation($input: SignupMutationInput!)  {
      signup(input: $input) {
        token
        user {
          username
        }
      }
    }
  `)
  const methods = useForm<SignupMutationInput>()
  const onSubmit = (data: SignupMutationInput) => {
    commit({
      variables: {
        input: data
      },
      onCompleted: (res, errors) => {
        if(errors) return errors.forEach(error => enqueueSnackbar(error.message, { variant: 'error' }))

        const { token, user } = res.signup
        enqueueSnackbar(`Welcome ${user.username}`, { variant: 'success' })
        localStorage.setItem('jwt', token)
        navigate('/')
        window.location.reload()
      },
    })
  }

  return (
    <AuthFormTransition>
      <div style={{ maxWidth: 1480, display: 'flex', justifyContent: 'center' }}>
        <Paper style={{ padding: 32, width: 'fit-content', backgroundColor: '#36393f', color: '#72767d' }}>
          <div style={{ width: 416 }}>
            <Typography variant='h5' style={{ textAlign: 'center', color: '#fff', fontWeight: 600 }}>
              Create an account
            </Typography>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)} style={{ marginTop: 20 }}>
              {[
                  { name: 'email', type: 'email', label: 'EMAIL' },
                  { name: 'username', label: 'USERNAME' },
                  { name: 'password', type: 'password', label: 'PASSWORD' },
                ].map(fieldProps => (
                  <InputTextField
                    key={fieldProps.name}
                    {...fieldProps}
                    style={{ marginBottom: 20 }}
                    validate={{ required: 'this field is required' }}
                    disabled={isInFlight}
                  />
                ))}

                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  fullWidth
                  style={{ height: 43 }}
                  disabled={isInFlight}
                >
                  Continue
                </Button>
                <div style={{ marginTop: 8, marginBottom: 20 }}>
                  <Link onClick={() => navigate('/auth/login')}>
                    Already have an account?
                  </Link>
                </div>
                <Typography variant='caption'>
                  By registering, you agree to Discord's{' '}
                  <Link href='#'>Terms of Service</Link>{' '}
                  and{' '}
                  <Link href='#'>Privacy Policy</Link>.
                </Typography>
              </form>
            </FormProvider>
          </div>
        </Paper>
      </div>
    </AuthFormTransition>
  )
}
export default Signup
