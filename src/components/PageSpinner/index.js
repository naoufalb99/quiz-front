import React from 'react'
import { createUseStyles } from 'react-jss'
import Spinner from '../Spinner'
import style from './style'

const useStyles = createUseStyles(style)

function PageSpinner () {
  const { pageSinner } = useStyles()

  return (
    <div className={pageSinner}>
      <Spinner radius='3px' size='32px' />
    </div>

  )
}

export default PageSpinner
