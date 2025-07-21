import { Link } from 'react-router-dom'

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">SkyWatch</Link>
        <div className="nav-links">
          <Link to="/">Dashboard</Link>
          <Link to="/search">Search Flights</Link>
          {isLoggedIn && <Link to="/history">History</Link>}
          {isLoggedIn ? (
            <button onClick={onLogout} className="btn btn-primary">Logout</button>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary">Login</Link>
              <Link to="/signup" className="btn btn-primary">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar