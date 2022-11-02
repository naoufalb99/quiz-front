import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import QuizPage from '../pages/QuizPage'
import SignUp from '../pages/SignUp'

function Routes () {
  return (
    <Router>
      <Switch>
        <Route component={SignUp} path={SignUpPath} exact />
        <Route component={QuizPage} path={QuizPath} exact />
      </Switch>
    </Router>
  )
}

export const SignUpPath = '/'
export const QuizPath = '/quiz'

export default Routes
