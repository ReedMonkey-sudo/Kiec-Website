export default function Navbar({ page, setPage, user, setUser }) {
  const handleLogout = () => {
    setUser(null)
    setPage('home')
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">KIEC</div>
      <div className="navbar-menu">

        {!user && (
          <>
            <button
              className={`nav-link ${page === 'login' ? 'active' : ''}`}
              onClick={() => setPage('login')}
            >
              Login
            </button>
          </>
        )}
        {user && (
          <>
            <button
              className={`nav-link ${page === 'students' ? 'active' : ''}`}
              onClick={() => setPage('students')}
            >
              Students
            </button>
            <button className="nav-link logout" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  )
}
