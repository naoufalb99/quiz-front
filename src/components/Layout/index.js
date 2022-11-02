import React from 'react'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

function Layout ({ children, noHeader = false }) {
  const { container, header, logo, subTitle } = useStyles()

  return (
    <div className={container}>
      {!noHeader && (
        <div className={header}>
          <div className={logo}>ROBOTIQUE FSR</div>
          <div className={subTitle}>Quiz</div>
        </div>)}
      {children}
    </div>
  )
}

export default Layout
