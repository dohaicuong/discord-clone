import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

export type BootIconProps = React.HtmlHTMLAttributes<HTMLDivElement> & {

}

const BootIcon: React.FC<BootIconProps> = ({ className }) => {
  const classes = useStyles()

  return (
    <div className={clsx(className, classes.root)}>
      <svg className={classes.back} viewBox="0 0 16 15.2">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
        />
      </svg>
      <div className={classes.gem}>
        <svg className="premiumGuildIconGem-DAxGL7 iconTierOne-s_oiRb" aria-hidden="false" width="6" height="11" viewBox="0 0 6 11"><path fill="currentColor" d="M3 0.625244L0 3.62524V7.62524L3 10.6252L6 7.62524V3.62524L3 0.625244ZM5 7.24524L3 9.24524L1 7.24524V4.04524L3 2.04524L5 4.04524V7.24524Z"></path></svg>
      </div>
    </div>
  )
}
export default BootIcon

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  back: {
    width: '100%',
    height: '100%',
    color: '#4f545c',
  },
  gem: {
    position: 'absolute',
    top: 5,
    left: 5,
  }
})