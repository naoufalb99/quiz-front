import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { useDispatch, useSelector } from 'react-redux'
import { selectAnswerAction } from '../../store/quiz'
import Answer from '../Answer'
import style from './style'

const useStyles = createUseStyles(style)

function Question ({ questionId, text, answers = [] }) {
  const { question, title, answersClass } = useStyles()
  const dispatch = useDispatch()
  const selectedAnswer = useSelector(({ quiz }) => quiz.selectedAnswers[questionId])
  const submitting = useSelector(({ quiz }) => quiz.attempt.isLoading)

  return (
    <div className={question}>
      <div className={title}>{text}</div>
      <div className={answersClass}>
        {
        answers.map(({ id: answerId, content }) =>
          (
            <Answer
              key={answerId}
              text={content}
              selected={selectedAnswer === answerId}
              handleClick={() => !submitting && dispatch(selectAnswerAction({ answerId, questionId }))}
            />))
}
      </div>
    </div>
  )
}

export default Question
