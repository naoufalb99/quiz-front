import { call, put, select, takeLatest } from 'redux-saga/effects'
import { BASE_API_URL } from '../constants'
import fetch from '../core/fetch'

const createActionName = (name) => `quiz/${name}`

const quizId = '54c2f440-8ca6-47b6-b8ae-25f2e966b335'

const initialState = {
  id: null,
  name: null,
  timeLimit: null,
  createdAt: null,
  updatedAt: null,
  isLoading: false,
  selectedAnswers: {},
  attempt: {
    isLoading: false,
    score: null,
    finishedAt: null,
    startedAt: null
  }
}

export default (state = initialState, { type, data }) => {
  switch (type) {
    case FETCH_QUIZ_START: {
      return {
        ...state,
        isLoading: true
      }
    }
    case FETCH_QUIZ_SUCCESS: {
      return {
        ...state,
        ...data.quiz,
        isLoading: false,
        attempt: {
          ...state.attempt,
          ...data.attempt
        }
      }
    }
    case FETCH_QUIZ_FAIL: {
      return {
        ...state,
        isLoading: false
      }
    }
    case SELECT_ANSWER: {
      return {
        ...state,
        selectedAnswers: {
          ...state.selectedAnswers,
          [data.questionId]: data.answerId
        }
      }
    }
    case SUBMIT_QUIZ_START: {
      return {
        ...state,
        attempt: {
          ...state.attempt,
          isLoading: true
        }
      }
    }
    case SUBMIT_QUIZ_SUCCESS: {
      return {
        ...state,
        attempt: {
          ...state.attempt,
          isLoading: false,
          ...data
        }
      }
    }
    case SUBMIT_QUIZ_FAIL: {
      return {
        ...state,
        attempt: {
          ...state.attempt,
          isLoading: false
        }
      }
    }
    default:
      return state
  }
}

export const fetchQuizAction = () => ({ type: FETCH_QUIZ_START })
export const selectAnswerAction = (data) => ({ type: SELECT_ANSWER, data })
export const submitQuizAction = () => ({ type: SUBMIT_QUIZ_START })

function * fetchQuiz () {
  const userId = yield select(({ user }) => user.id)
  try {
    const quizResponse = yield call(fetch, queries.fetchQuiz(quizId))
    const attemptResponse = yield call(fetch, queries.startQuiz(quizId), { method: 'POST', body: JSON.stringify({ userId }), headers: { 'Content-Type': 'application/json' } })
    yield put({ type: FETCH_QUIZ_SUCCESS, data: { quiz: quizResponse, attempt: attemptResponse } })
  } catch (err) {
    yield put({ type: FETCH_QUIZ_FAIL })
  }
}

function * submitQuiz () {
  const userId = yield select(({ user }) => user.id)
  const quizId = yield select(({ quiz }) => quiz.id)
  const selectedAnswers = yield select(({ quiz }) => quiz.selectedAnswers)
  try {
    const body = JSON.stringify({ userId, selectedAnswers })
    const response = yield call(fetch, queries.submitQuiz(quizId), { method: 'POST', body, headers: { 'Content-Type': 'application/json' } })
    yield put({ type: SUBMIT_QUIZ_SUCCESS, data: response })
  } catch (err) {
    yield put({ type: SUBMIT_QUIZ_FAIL })
  }
}

const queries = {
  fetchQuiz: quizId => `${BASE_API_URL}/quizzes/${quizId}`,
  startQuiz: quizId => `${BASE_API_URL}/quizzes/${quizId}/attempt/start`,
  submitQuiz: quizId => `${BASE_API_URL}/quizzes/${quizId}/attempt/finish`
}

export function * quizRootSaga () {
  yield takeLatest(FETCH_QUIZ_START, fetchQuiz)
  yield takeLatest(SUBMIT_QUIZ_START, submitQuiz)
}

export const FETCH_QUIZ_START = createActionName('FETCH_QUIZ_START')
export const FETCH_QUIZ_SUCCESS = createActionName('FETCH_QUIZ_SUCCESS')
export const FETCH_QUIZ_FAIL = createActionName('FETCH_QUIZ_FAIL')
export const SELECT_ANSWER = createActionName('SELECT_ANSWER')
export const SUBMIT_QUIZ_START = createActionName('SUBMIT_QUIZ_START')
export const SUBMIT_QUIZ_SUCCESS = createActionName('SUBMIT_QUIZ_SUCCESS')
export const SUBMIT_QUIZ_FAIL = createActionName('SUBMIT_QUIZ_FAIL')
