import React from 'react'
import PropTypes from 'prop-types'
import AuthLayout from '../../layouts/AuthLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { LoginPageWrapper } from './LoginPageStyled'

const LoginPage = props => {
  return (
    <AuthLayout>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginPageWrapper>

      </LoginPageWrapper>
    </AuthLayout>
  )
}

LoginPage.propTypes = {}

export default LoginPage