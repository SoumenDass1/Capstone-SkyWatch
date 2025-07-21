import { Link, useLocation, useNavigate } from 'react-router-dom'
import './navbar.css'

const Navbar = ({ onLogout }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token') // ✅ Session clear karo
    if (onLogout) onLogout()         // ✅ Parent ko bhi notify karo
    navigate('/login')               // ✅ Login page pe redirect
  }

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">SkyWatch</Link>
        <div className="nav-links">
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
          >
            Dashboard
          </Link>
          <Link
            to="/search"
            className={location.pathname === '/search' ? 'active' : ''}
          >
            Search Flights
          </Link>
          <Link
            to="/history"
            className={location.pathname === '/history' ? 'active' : ''}
          >
            History
          </Link>

          {/* 🚀 Logout Link */}
          <Link
            to="/login"
            onClick={handleLogout}
            className="btn btn-primary"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
