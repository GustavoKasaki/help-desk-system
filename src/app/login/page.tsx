'use client'
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa'

import { login } from './actions'
import Button from '@/components/Button/Button'
import Logo from '@/components/Logo/Logo'

import { LoginContainer, LoginPage } from './styles'

const Login = () => {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const result = await login(formData)

    if (result?.error) {
      window.alert(result.error)
    }
  }

  return (
    <LoginPage>
      <LoginContainer>
        <Logo />
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-field">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <FaLock className="icon" />
          </div>
          <Button type="submit" titulo="Login" icon={FaSignInAlt} />
        </form>
      </LoginContainer>
    </LoginPage>
  )
}

export default Login
