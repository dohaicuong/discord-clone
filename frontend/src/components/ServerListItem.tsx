import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

export type DiscordListItemProps = React.HtmlHTMLAttributes<HTMLLIElement> & {
  status?: 'none' | 'notice' | 'active'
  classes?: ListItemClasses
}

type ListItemClasses = {
  root?: string
  sideStatusWrapper?: string
  sideStatus?: string
}

const DiscordListItem: React.FC<DiscordListItemProps> = ({
  status = 'none',
  className,
  classes,
  children,
  ...props
}) => {
  const defaultClasses = useStyles()

  return (
    <li
      className={clsx(className, defaultClasses.root, classes?.root)}
      {...props}
    >
      <div className={clsx(defaultClasses.sideStatusWrapper, classes?.sideStatusWrapper)}>
        <span className={clsx(
          defaultClasses.sideStatus,
          classes?.sideStatus,
          (defaultClasses as any)[`status_${status}`],
        )}/>
      </div>
      {children}
    </li>
  )
}
export default DiscordListItem

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    '&:hover $sideStatus': {
      height: 20,
    }
  },
  sideStatusWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 8,
    height: 48,
  },
  sideStatus: {
    display: 'block',
    backgroundColor: theme.palette.common.white,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    width: 4,
    transition: 'height 50ms ease-in-out'
  },
  status_none: {
    height: 0,
  },
  status_notice: {
    height: 8,
  },
  status_active: {
    height: '40px !important',
  }
}))
