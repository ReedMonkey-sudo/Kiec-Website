export default function StudentList({ students, setPage, deleteStudent }) {
  return (
    <div className="students-page">
      <div className="page-header">
        <h1>Student List</h1>
        <button className="btn btn-primary" onClick={() => setPage('add-student')}>
          Add Student
        </button>
      </div>
      {students.length === 0 ? (
        <p className="empty">No students yet. Add your first student.</p>
      ) : (
        <table className="students-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.course}</td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => deleteStudent(s.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
