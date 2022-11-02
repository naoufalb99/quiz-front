const validate = (values) => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = 'First Name is a required field.'
  } else if (values.firstName.length < 3) {
    errors.firstName = 'First Name must be at least 3 characters.'
  }

  if (!values.lastName) {
    errors.lastName = 'Last Name is a required field.'
  } else if (values.lastName.length < 3) {
    errors.lastName = 'Last Name must be at least 3 characters.'
  }

  if (!values.email) {
    errors.email = 'Email is a required field.'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.phone) {
    errors.phone = 'Phone is a required field.'
  } else if (!/^((06)|(07))[0-9]{8}$/i.test(values.phone)) {
    errors.phone = 'Invalid phone number'
  }

  return errors
}

export default validate
