import { InputBase, makeStyles, Paper } from '@material-ui/core'
import { Search } from '@material-ui/icons'

const SearchInput = () => {
  const classes = useStyles()

  return (
    <Paper component='form' className={classes.root}>
      <InputBase
        className={classes.input}
        classes={{
          focused: classes.inputFocused,
        }}
        placeholder='Search'
      />
      <Search className={classes.icon} />
    </Paper>
  )
}

export default SearchInput

const useStyles = makeStyles(theme => ({
  root: {
    height: 24,
    margin: '0 8px',
    padding: '0 4px',
    display: 'flex',
    alignItems: 'center',
    color: '#dcddde',
    backgroundColor: '#202225',
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 20,
    overflow: 'hidden',
    padding: '2px 0',
    cursor: 'text',
    width: 116,
  },
  inputFocused: {
    width: 212,
  },
  icon: {
    width: 18,
    height: 18,
    color: '#979899'
  },
}))