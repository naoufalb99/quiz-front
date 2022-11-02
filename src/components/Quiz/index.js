import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import Button from '../Button'
import Question from '../Question'
import Selector from '../Selector'
import style from './style'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuizAction, submitQuizAction } from '../../store/quiz'
import PageSpinner from '../PageSpinner'
import Layout from '../Layout'
import Modal from '../Modal'

const useStyles = createUseStyles(style)

function Quiz () {
  const { quiz, selectors, nextButtonWrapper, header, previous, hidePrevious, logo, quizPosition, modalTitle, scoreText1, scoreText2, scoreValue } = useStyles({ })
  const dispatch = useDispatch()

  const quizData = useSelector(({ quiz }) => quiz)
  const attempt = useSelector(({ quiz }) => quiz.attempt)

  const submitting = attempt.isLoading
  const totalQuestions = quizData?.QuizQuestions?.length || 0
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const currentQuestion = quizData?.QuizQuestions?.[currentQuestionIndex]

  const setCurrentQuestionIndexProxy = (value) => !submitting && setCurrentQuestionIndex(value)

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndexProxy(currentQuestionIndex + 1)
    } else {
      dispatch(submitQuizAction())
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndexProxy(currentQuestionIndex - 1)
    }
  }

  useEffect(() => {
    dispatch(fetchQuizAction())
  }, [])

  if (quizData.id === null || quizData.isLoading) {
    return <PageSpinner />
  }

  return (
    <>
      <Modal isOpen={!!attempt.finishedAt}>
        <div className={modalTitle}>{attempt.score >= totalQuestions / 2 ? 'Congratulation' : 'Failed'}</div>
        <div className={scoreText1}>You answered</div>
        <div className={scoreValue}>{attempt.score}/{totalQuestions}</div>
        <div className={scoreText2}>Questions correct</div>
      </Modal>
      <Layout noHeader>
        <div className={quiz}>
          <div className={selectors}>
            {
            [...Array(totalQuestions)].map((_, i) => <Selector key={i} active={i === currentQuestionIndex} onClick={() => setCurrentQuestionIndexProxy(i)} />)
        }
          </div>
          <div className={header}>
            <div className={clsx(previous, currentQuestionIndex === 0 && hidePrevious)} onClick={handlePrevious}>Previous</div>
            <div className={logo}>
              ROBOTIQUE FSR
            </div>
          </div>
          <div className={quizPosition}>Question {currentQuestionIndex + 1} / {totalQuestions}</div>
          <Question
            questionId={currentQuestion.id}
            text={currentQuestion.content}
            answers={currentQuestion.QuizAnswers}
          />
          <div className={nextButtonWrapper}>
            <Button onClick={handleNext} loading={submitting}>{currentQuestionIndex === totalQuestions - 1 ? 'Submit' : 'Next Question'}</Button>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Quiz
