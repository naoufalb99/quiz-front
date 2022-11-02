import { all } from 'redux-saga/effects'
import { userRootSaga } from './user'
import { quizRootSaga } from './quiz'

export default function * rootSaga () {
  yield all([
    userRootSaga(),
    quizRootSaga()
  ])
}
