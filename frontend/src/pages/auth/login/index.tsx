import { Divider, Grid, Hidden, Paper, Typography } from '@material-ui/core'
import { FormProvider, useForm } from 'react-hook-form'
import InputTextField from 'components/InputTextField'
import Button from 'components/Button'
import Link from 'components/Link'
import { useNavigate } from 'react-router'
import loginQR from 'resources/loginQR.png'
import AuthFormTransition from '../AuthFormTransition'
import { useSnackbar } from 'notistack'
import { useMutation } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { loginMutation, LoginMutationInput } from './__generated__/loginMutation.graphql'

const Login = () => {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const [commit, isInFlight] = useMutation<loginMutation>(graphql`
    mutation loginMutation($input: LoginMutationInput!) {
      login(input: $input) {
        token
        user {
          username
        }
      }
    }
  `)
  const methods = useForm<LoginMutationInput>()
  const onSubmit = (data: LoginMutationInput) => {
    commit({
      variables: {
        input: data
      },
      onCompleted: (res, errors) => {
        if(errors) return errors.forEach(error => enqueueSnackbar(error.message, { variant: 'error' }))

        const { token, user } = res.login
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
          <Grid container alignItems='center'>
            <Grid item style={{ width: 416 }}>
              <Typography variant='h5' style={{ textAlign: 'center', color: '#fff', marginBottom: 8, fontWeight: 600 }}>
                Welcome back!
              </Typography>
              <Typography variant='subtitle1' style={{ textAlign: 'center', lineHeight: '20px', color: '#b9bbbe' }}>
                We're so excited to see you again!
              </Typography>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} style={{ marginTop: 20 }}>
                  {[
                    { name: 'email', type: 'email', label: 'EMAIL' },
                    { name: 'password', type: 'password', label: 'PASSWORD', last: true },
                  ].map(({ last, ...fieldProps }) => (
                    <InputTextField
                      key={fieldProps.name}
                      {...fieldProps}
                      style={{ marginBottom: last ? 0 : 20 }}
                      validate={{ required: 'this field is required' }}
                      disabled={isInFlight}
                    />
                  ))}
                  <div style={{ marginTop: 4, marginBottom: 20 }}>
                    <Link onClick={() => console.log('forgot password')}>
                      Forgot your password?
                    </Link>
                  </div>
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    fullWidth
                    style={{ marginBottom: 8, height: 43, fontSize: 16 }}
                    disabled={isInFlight}
                  >
                    Login
                  </Button>
                  <div style={{ marginTop: 4 }}>
                    <span>Need an account? </span>
                    <Link onClick={() => navigate('/auth/signup')}>
                      Register
                    </Link>
                  </div>
                </form>
              </FormProvider>
            </Grid>
            <Hidden smDown>
              <Divider
                orientation='vertical'
                flexItem
                style={{ height: 1, width: 2, margin: '0 32px' }}
              />
              <Grid item style={{ width: 240 }}>
                <img
                  src={loginQR}
                  alt='login qr code'
                  style={{ display: 'block', margin: '0 auto 32px auto' }}
                />
                <Typography variant='h5' style={{ textAlign: 'center', color: '#fff', marginBottom: 8, fontWeight: 600 }}>
                  Log in with QR Code
                </Typography>
                <Typography variant='subtitle1' style={{ textAlign: 'center', lineHeight: '20px', color: '#b9bbbe' }}>
                  Scan this with the <strong>Discord mobile app</strong> to log in instantly.
                </Typography>
              </Grid>
            </Hidden>
          </Grid>
        </Paper>
      </div>
    </AuthFormTransition>
  )
}
export default Login
