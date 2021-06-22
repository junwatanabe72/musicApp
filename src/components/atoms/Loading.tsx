import React from 'react'
import {
  Backdrop,
  CircularProgress,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core'

interface Props {
  open: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
)
const LoadingComponent: React.FC<Props> = ({ open }) => {
  const classes = useStyles()
  return (
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default LoadingComponent
