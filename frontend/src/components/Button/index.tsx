import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  makeStyles,
} from '@material-ui/core'

type ButtonProps =
  Omit<MuiButtonProps, 'disableElevation' | 'disableRipple' | 'disableTouchRipple' | 'disableFocusRipple'>
  & {}

const Button: React.FC<ButtonProps> = props => {
  const classes = useStyles()

  return (
    <MuiButton
      {...props}
      classes={{
        ...classes,
        ...props.classes,
      }}
      disableElevation
      disableRipple
      disableTouchRipple
      disableFocusRipple
    >
      {props.children}
    </MuiButton>
  )
}

export default Button

const useStyles = makeStyles({
  root: {
    lineHeight: '24px',
    padding: '2px 16px',
    minHeight: 38,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#677bc4',
    },
    '&:active': {
      backgroundColor: '#5b6eae',
    }
  }
})