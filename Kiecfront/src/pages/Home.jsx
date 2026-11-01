export default function Home({ setPage }) {
  return (
    <section className="home" aria-labelledby="home-title">
      <div className="home-copy">
        <p className="home-eyebrow">KIEC LALITPUR</p>
        <h1 className="home-title" id="home-title">
          Welcome to KIEC Consultancy
        </h1>
        <p className="home-description">
          Your student management workspace. Find and manage student records
          with ease.
        </p>
        <button
          className="btn btn-primary home-action"
          onClick={() => setPage('students')}
        >
          View Students
        </button>
      </div>
      <div className="home-visual">
        <img
          src="/kiec%20logo.png"
          alt="KIEC Lalitpur logo with Himalayan mountains and Nepalese temples"
          className="home-image"
        />
      </div>
    </section>
  )
}
