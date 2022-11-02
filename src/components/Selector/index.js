import React from 'react'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

function Selector ({ active, onClick }) {
  const { selector } = useStyles({ active })

  return (
    <div className={selector} onClick={onClick} />
  )
}

export default Selector
