import React from 'react'
import PropTypes from 'prop-types'
import { AuthLayoutWrapper } from './AuthLayoutStyled'

const AuthLayout = props => {
  const {children} = props
  return (
    <AuthLayoutWrapper>
      {children}
    </AuthLayoutWrapper>
  )
}

AuthLayout.propTypes = {

}

export default AuthLayout