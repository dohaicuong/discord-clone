import { Grid } from '@material-ui/core'
import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router'
import Servers from './Servers'

import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { appQuery } from './__generated__/appQuery.graphql'

const App = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if(!token) navigate('/auth/login')
  }, [pathname, navigate])

  const data = useLazyLoadQuery<appQuery>(
    graphql`
      query appQuery {
        me {
          ...ServersFragment_userServers
        }
      }
    `,
    {}
  )

  return (
    <Grid container>
      <Grid item style={{ width: 72, height: '100vh', background: '#202225' }}>
        {data.me && <Servers userServers={data.me} />}
      </Grid>
      <Grid item xs style={{ background: '#2f3136' }}>
        <Outlet />
      </Grid>
    </Grid>
  )
}
export default App
