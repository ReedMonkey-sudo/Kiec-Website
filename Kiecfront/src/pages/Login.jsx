import { useState } from 'react'

export default function Login({ setPage, setUser }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please fill all fields')
      return
    }
    setError('')
    setUser({ email })
    setPage('students')
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </form>
        <p className="auth-footer">
          Don't have an account?{' '}
          <button type="button" className="link" onClick={() => setPage('register')}>
            Register
          </button>
        </p>
      </div>
    </div>
  )
}
