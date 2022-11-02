import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Quiz from '../../components/Quiz'
import { SignUpPath } from '../../core/Routes'

function QuizPage () {
  const userId = useSelector(({ user }) => user.id)
  const history = useHistory()

  useEffect(() => {
    if (!userId) {
      history.push(SignUpPath)
    }
  }, [])

  return userId && (
    <Quiz />
  )
}

export default QuizPage
