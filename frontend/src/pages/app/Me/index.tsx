// import { useState } from 'react'
import StyledHeader from 'components/StyledHeader'
import { Grid } from '@material-ui/core'
import { Outlet } from 'react-router'

const Me = () => {
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  // const handleClick = (event: React.MouseEvent<HTMLHeadingElement>) => setAnchorEl(event.currentTarget)
  // const handleClose = () => {
  //   setAnchorEl(null)
  // }

  return (
    <Grid container>
      <Grid item container direction='column' style={{ position: 'relative', width: 240, height: '100vh' }}>
        <StyledHeader
          // onClick={(handleClick)}
        >
          asd
        </StyledHeader>
      </Grid>
      <Grid item xs style={{ background: '#36393f' }}>
        <Outlet />
      </Grid>
    </Grid>
  )
}
export default Me
