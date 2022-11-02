import React from 'react'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

function Modal ({ children, isOpen = false }) {
  const { overlay, modal } = useStyles()

  if (!isOpen) return null

  return (
    <div className={overlay}>
      <div className={modal}>
        {children}
      </div>
    </div>
  )
}

export default Modal
