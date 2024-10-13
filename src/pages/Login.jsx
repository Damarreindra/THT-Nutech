import React from 'react'
import AuthLayout from '../components/AuthLayout'
import AuthContainer from '../components/AuthContainer'
import LoginForm from '../components/LoginForm'

function Login() {
  return (
    <AuthLayout>
      <AuthContainer>

      <LoginForm/>
      </AuthContainer>
    </AuthLayout>
  )
}

export default Login