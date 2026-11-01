export default function Home({ setPage }) {
  return (
    <div className="home">
      <img
        src="/kiec%20logo.png"
        alt="Kiec Consultancy logo"
        className="home-bg"
      />
      <div className="home-overlay">
        <div className="hero">
          {/* <h1>Welcome to Kiec Consultancy</h1> */}
          {/* <p>Student Management System</p> */}
          {/* <div className="hero-actions"> */}
            <button className="btn btn-primary" onClick={() => setPage('students')}>
              View Students
            </button>
          {/* </div> */}
        </div>
        {/* <div className="features"> */}
          {/* <div className="card"> */}
            {/* <h3>Manage Students</h3> */}
            {/* <p>Add, view, and manage student records.</p> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  )
}
