import { useState } from 'react'

export default function AddStudent({ addStudent, setPage }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [course, setCourse] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !course) {
      setError('Please fill all fields')
      return
    }
    setError('')
    addStudent({ name, email, course })
    setName('')
    setEmail('')
    setCourse('')
    setPage('students')
  }

  return (
    <div className="form-page">
      <div className="form-card">
        <h2>Add Student</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
            <label>Course</label>
            <input
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Add Student
          </button>
        </form>
        <p className="form-footer">
          <button type="button" className="link" onClick={() => setPage('students')}>
            Back to list
          </button>
        </p>
      </div>
    </div>
  )
}
