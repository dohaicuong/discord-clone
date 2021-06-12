import { withStyles } from '@material-ui/core'

const StyledHeader = withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '48px',
    paddingLeft: 16,
    paddingRight: 16,
    cursor: 'pointer',
    boxShadow: '0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05)',
    color: '#fff'
  }
})(({ classes, children, ...props }: any) => {
  return (
    <header className={classes.root} {...props}>
      {children}
    </header>
  )
})

export default StyledHeader
