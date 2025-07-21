import { useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Search from './pages/Search'
import History from './pages/History'
import Login from './pages/Login'
import Signup from './pages/Signup'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [flightHistory, setFlightHistory] = useState([])
  const navigate = useNavigate()

  const handleLogin = () => {
    setIsLoggedIn(true)
    navigate('/dashboard')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    navigate('/login')
  }

  const addToHistory = (flightData) => {
    setFlightHistory(prev => [...prev, flightData])
  }

  return (
    <div className="app">
      {isLoggedIn && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={
          !isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" replace />
        } />
        <Route path="/signup" element={
          !isLoggedIn ? <Signup onSignup={handleLogin} /> : <Navigate to="/dashboard" replace />
        } />
        <Route path="/dashboard" element={
          isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />
        } />
        <Route path="/search" element={
          isLoggedIn ? <Search addToHistory={addToHistory} /> : <Navigate to="/login" replace />
        } />
        <Route path="/history" element={
          isLoggedIn ? <History history={flightHistory} /> : <Navigate to="/login" replace />
        } />
      </Routes>
    </div>
  )
}

export default App