import { useEffect } from 'react'

import { makeStyles } from '@material-ui/core'
import { Outlet, useLocation, useMatch, useNavigate } from 'react-router'
import backgroundDark from 'resources/auth_background_dark.jpg'

const Auth = () => {
  const classes = useStyles()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if(token) navigate('/')
  }, [pathname, navigate])

  const match = useMatch('/auth')
  const isMatch = Boolean(match)
  useEffect(() => {
    if(isMatch) navigate('login')
  }, [isMatch, navigate])

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Outlet />
      </div>
    </div>
  )
}
export default Auth

const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url("${backgroundDark}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    zIndex: 10,
    width: '100%',
  }
})
