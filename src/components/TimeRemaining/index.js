import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

function TimeRemaining ({ totalMinutes, startDate }) {
  const { root, circle } = useStyles()

  const startTime = startDate.getTime()
  const endTime = startTime + totalMinutes * 60 * 1000

  const [minutesLeft, setMinutesLeft] = useState(0)

  useEffect(() => {
    const calcMinutesLeft = () => {
      const timeLeft = endTime - new Date().getTime()
      const timeLeftInMinutes = parseInt(timeLeft / 1000 / 60)
      setMinutesLeft(timeLeftInMinutes < 0 ? 0 : timeLeftInMinutes)
    }
    calcMinutesLeft()
    const intervalID = setInterval(calcMinutesLeft, 100)
    return () => {
      clearInterval(intervalID)
    }
  }, [endTime])

  return (
    <div className={root}>
      <span>Time Remaining</span>
      <div className={circle}>
        {minutesLeft}
      </div>
    </div>
  )
}

export default TimeRemaining
