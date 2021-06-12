import { InputBase, withStyles } from '@material-ui/core'

const StyledTextField = withStyles(theme => ({
  root: {
    'label + &': {
      position: 'relative',
      marginTop: theme.spacing(3),
    }
  },
  input: {
    borderRadius: 3,
    backgroundColor: '#303338',
    color: '#dcddde',
    padding: 10,
    height: 20,
    transition: 'border-color .2s ease-in-out',
    border: '1px solid',
    borderColor: 'rgba(0,0,0,0.3)',
    '&:hover': {
      borderColor: '#040405',
    },
    '&:focus': {
      borderColor: '#7289da',
    },
    // '&:-webkit-autofill': {
    //   '-webkit-box-shadow': '0 0 0 40px #303338 inset !important',
    //   '-webkit-text-fill-color': '#dcddde !important',
    // },
    // '&:-webkit-autofill:hover': {
    //   '-webkit-box-shadow': '0 0 0 40px #303338 inset !important',
    // },
    // '&:-webkit-autofill:focus': {
    //   '-webkit-box-shadow': '0 0 0 40px #303338 inset !important',
    // },
    // '&:-webkit-autofill:active': {
    //   '-webkit-box-shadow': '0 0 0 40px #303338 inset !important',
    // },
  },
  error: {
    '& > input': {
      borderColor: `${theme.palette.error.main} !important`,
    }
  }
}))(InputBase)

export default StyledTextField
