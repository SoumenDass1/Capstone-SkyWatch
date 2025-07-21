import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    
    // Simulate login (replace with actual authentication)
    setTimeout(() => {
      onLogin()
      navigate('/') // Redirect to dashboard after login
    }, 500)
  }

  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="register-link">
          Don't have an account? <a href="/signup"><span>Sign up</span></a>
        </p>
      </div>
    </div>
  )
}

export default Login