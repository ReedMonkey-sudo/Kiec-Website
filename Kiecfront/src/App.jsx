import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import StudentList from './pages/StudentList.jsx'
import AddStudent from './pages/AddStudent.jsx'
import './App.css'

export default function App() {
  const [page, setPage] = useState('home')
  const [user, setUser] = useState(null)
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('kiec_students')
    return saved ? JSON.parse(saved) : []
  })

  const addStudent = (student) => {
    const newStudent = { id: Date.now(), ...student }
    const updated = [...students, newStudent]
    setStudents(updated)
    localStorage.setItem('kiec_students', JSON.stringify(updated))
  }

  const deleteStudent = (id) => {
    const updated = students.filter((s) => s.id !== id)
    setStudents(updated)
    localStorage.setItem('kiec_students', JSON.stringify(updated))
  }

  return (
    <div className="app">
      <Navbar page={page} setPage={setPage} user={user} setUser={setUser} />
      <main className="page-content">
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'login' && <Login setPage={setPage} setUser={setUser} />}
        {page === 'register' && <Register setPage={setPage} setUser={setUser} />}
        {page === 'students' && (
          <StudentList students={students} setPage={setPage} deleteStudent={deleteStudent} />
        )}
        {page === 'add-student' && <AddStudent addStudent={addStudent} setPage={setPage} />}
      </main>
    </div>
  )
}
