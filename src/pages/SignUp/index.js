import React from 'react'
import { useFormik } from 'formik'
import { createUseStyles } from 'react-jss'
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import style from './style'
import { useHistory } from 'react-router-dom'
import { QuizPath } from '../../core/Routes'
import validate from './validate'
import { useDispatch, useSelector } from 'react-redux'
import { signUpAction } from '../../store/user'
import Layout from '../../components/Layout'

const useStyles = createUseStyles(style)

function SignUp () {
  const { formWrapper, formGroup, startQuizButton } = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const isLoading = useSelector(({ user }) => user.signUp.isLoading)

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    },
    validate,
    onSubmit: ({ firstName, lastName, email, phone }) => {
      dispatch(signUpAction({ firstName, lastName, email, phone }, () => {
        history.push(QuizPath)
      }))
    }
  })

  return (
    <Layout>
      <div className={formWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={formGroup}>
            <label htmlFor='firstName'>First name</label>
            <TextInput
              id='firstName'
              name='firstName'
              value={values.firstName}
              onChange={handleChange}
              error={touched.firstName && errors.firstName}
            />
          </div>
          <div className={formGroup}>
            <label htmlFor='lastName'>Last name</label>
            <TextInput
              id='lastName'
              name='lastName'
              value={values.lastName}
              onChange={handleChange}
              error={touched.lastName && errors.lastName}
            />
          </div>
          <div className={formGroup}>
            <label htmlFor='email'>Email</label>
            <TextInput
              id='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              error={touched.email && errors.email}
            />
          </div>
          <div className={formGroup}>
            <label htmlFor='phone'>Phone</label>
            <TextInput
              id='phone'
              name='phone'
              value={values.phone}
              onChange={handleChange}
              error={touched.phone && errors.phone}
            />
          </div>
          <Button type='submit' className={startQuizButton} fullWidth loading={isLoading}>Start Quiz!</Button>
        </form>
      </div>
    </Layout>
  )
}

export default SignUp
