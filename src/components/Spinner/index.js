import React from 'react'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

function Spinner ({ size = '48px', color = '#338CFE', radius = '5px' }) {
  const { spinner } = useStyles({ size, color, radius })

  return (
    <div className={spinner} />
  )
}

export default Spinner
