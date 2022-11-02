import { call, put, takeLatest } from 'redux-saga/effects'
import fetch from '../core/fetch'

const createActionName = (name) => `user/${name}`

const initialState = {
  id: null,
  signUp: {
    isLoading: false
  }
}

export default (state = initialState, { type, data }) => {
  switch (type) {
    case SIGNUP_START: {
      return {
        ...state,
        signUp: {
          ...state.signUp,
          isLoading: true
        }
      }
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        id: data.id,
        signUp: {
          ...state.signUp,
          isLoading: false
        }
      }
    }
    case SIGNUP_FAIL: {
      return {
        ...state,
        signUp: {
          ...state.signUp,
          isLoading: false
        }
      }
    }
    default:
      return state
  }
}

export const signUpAction = (data, next) => ({ type: SIGNUP_START, data, next })

function * signUp ({ data: { firstName, lastName, email, phone }, next }) {
  try {
    const body = JSON.stringify({ firstName, lastName, email, phone })
    const response = yield call(fetch, queries.signUp, { method: 'POST', body, headers: { 'Content-Type': 'application/json' } })
    yield put({ type: SIGNUP_SUCCESS, data: { id: response.id } })
    next && next()
  } catch (err) {
    yield put({ type: SIGNUP_FAIL })
  }
}

const queries = {
  signUp: '/users/signUp'
}

export function * userRootSaga () {
  yield takeLatest(SIGNUP_START, signUp)
}

export const SIGNUP_START = createActionName('SIGNUP_START')
export const SIGNUP_SUCCESS = createActionName('SIGNUP_SUCCESS')
export const SIGNUP_FAIL = createActionName('SIGNUP_FAIL')
