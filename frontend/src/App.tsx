import { lazy } from 'react'

import { RelayEnvironmentProvider } from 'react-relay'
import environment from 'providers/relay'

import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { SnackbarProvider } from 'notistack'
import theme from 'providers/theme'

import { BrowserRouter as Router, Routes } from 'react-router-dom'
import SuspenseRoute from 'components/SuspenseRoute'

const App = lazy(() => import(/* webpackChunkName: 'App' */ 'pages/app'))
const Me = lazy(() => import(/* webpackChunkName: 'Me' */ 'pages/app/Me'))
const Server = lazy(() => import(/* webpackChunkName: 'Server' */ 'pages/app/Server'))

const Auth = lazy(() => import(/* webpackChunkName: 'Auth' */ 'pages/auth'))
const Login = lazy(() => import(/* webpackChunkName: 'Login' */ 'pages/auth/login'))
const Signup = lazy(() => import(/* webpackChunkName: 'Signup' */ 'pages/auth/signup'))

const NotFound = lazy(() => import(/* webpackChunkName: 'NotFound' */ 'pages/notfound'))

const AppRoot = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
          <Router>
            <Routes>
              <SuspenseRoute path='/' element={<App />}>
                <SuspenseRoute path='@me' element={<Me />} />
                <SuspenseRoute path=':serverId' element={<Server />} />
              </SuspenseRoute>
              <SuspenseRoute path='auth' element={<Auth />}>
                <SuspenseRoute path='login' element={<Login />}/>
                <SuspenseRoute path='signup' element={<Signup />}/>
              </SuspenseRoute>
              <SuspenseRoute path='*' element={<NotFound />} />
            </Routes>
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </RelayEnvironmentProvider>
  )
}

export default AppRoot
