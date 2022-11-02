import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

function TextInput ({ className, type = 'text', error, ...props }) {
  const { input, errorClass } = useStyles({ error })

  return (
    <>
      <input type={type} className={clsx(input, className)} {...props} />
      {error && <div className={errorClass}>{error}</div>}
    </>
  )
}

export default TextInput
