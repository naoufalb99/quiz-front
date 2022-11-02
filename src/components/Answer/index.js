import React from 'react'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

function Answer ({ text, selected = false, handleClick }) {
  const { answer, checkbox } = useStyles({ selected })

  return (
    <div className={answer} onClick={handleClick}>
      <div className={checkbox} />
      {text}
    </div>
  )
}

export default Answer
