import clsx from 'clsx'
import React from 'react'
import { createUseStyles } from 'react-jss'
import Spinner from '../Spinner'
import style from './style'

const useStyles = createUseStyles(style)

function Button ({ children, className, onClick, fullWidth = false, loading = false, disabled = false, ...props }) {
  const { button, spinnerOverlay } = useStyles({ fullWidth })

  return (
    <button onClick={onClick} className={clsx(button, className)} disabled={loading || disabled} {...props}>
      {loading && (
        <div className={spinnerOverlay}>
          <Spinner color='#FFF' size='24px' radius='2px' />
        </div>)}
      {children}
    </button>
  )
}

export default Button
