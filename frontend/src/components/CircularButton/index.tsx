import { makeStyles, Popover, Typography } from '@material-ui/core'
import { useState } from 'react'
import clsx from 'clsx'

export type CircularButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'secondary'
  image?: string | JSX.Element
  icon?: React.ReactNode
  title?: string
  textColor?: string
  selected?: boolean
}

const CircularButton: React.FC<CircularButtonProps> = props => {
  const {
    image, icon,
    title,
    selected = false,
    textColor,
    ...rest
  } = props
  const classes = useStyles(props)

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const open = Boolean(anchorEl)
  const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget)
    props.onMouseEnter?.(event)
  }
  const handlePopoverClose = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(null)
    props.onMouseLeave?.(event)
  }

  return (
    <>
      <button className={clsx(
        classes.button,
        selected && classes.buttonSelected
      )}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        {...rest}
      >
        {!image && icon}
      </button>
      {title && (
        <Popover
          className={classes.popover}
          classes={{
            paper: classes.popoverPaper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: -8,
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography style={{ fontWeight: 600 }}>
            {title}
          </Typography>
        </Popover>
      )}
    </>
  )
}
export default CircularButton

const useStyles = makeStyles(theme => ({
  button: ({ color = 'primary', image, textColor: defaultTextColor }: CircularButtonProps) => {
    const currentColor = theme.palette[color]
    const textColor = '#fff'

    return {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 48,
      width: 48,
      cursor: 'pointer',
      transition: 'all 300ms ease-in-out',
      border: 'none',
      borderRadius: '100%',
      backgroundColor: '#36393f',
      color: defaultTextColor || currentColor.main,
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      '&:hover': {
        backgroundColor: currentColor.main,
        color: textColor,
        borderRadius: '1rem',
      },
      '&:focus': {
        backgroundColor: currentColor.main,
        color: textColor,
        borderRadius: '1rem',
        outline: 'none',
      },
    }
  },
  buttonSelected: ({ color = 'primary' }: CircularButtonProps) => {
    const currentColor = theme.palette[color]
    const textColor = '#fff'

    return {
      backgroundColor: currentColor.main,
      color: textColor,
      borderRadius: '1rem',
    }
  },
  popover: {
    pointerEvents: 'none',
  },
  popoverPaper: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}))