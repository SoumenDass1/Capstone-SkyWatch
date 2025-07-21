import { useState } from 'react'
import FlightCard from '../components/FlightCard'
import { searchFlight } from '../utils/api'
import './Search.css' // Create this new CSS file

const Search = ({ addToHistory }) => {
  const [flightNumber, setFlightNumber] = useState('')
  const [flightData, setFlightData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!flightNumber.trim()) return
    
    setLoading(true)
    setError('')
    
    try {
      const data = await searchFlight(flightNumber)
      if (data) {
        setFlightData(data)
        addToHistory(data)
      } else {
        setError('Flight not found')
      }
    } catch (err) {
      setError('Error fetching flight data')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="search-container">
      <div className="search-content">
        <h1 className="search-title">Search Flight Status</h1>
        
        <form onSubmit={handleSearch} className="search-form">
          <div className="form-group">
            <label htmlFor="flightNumber">Flight Number (e.g., DL123)</label>
            <input
              type="text"
              id="flightNumber"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
              placeholder="Enter flight number"
              className="search-input"
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary search-button" 
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search Flight'}
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {flightData && (
          <div className="flight-result">
            <h2 className="result-title">Flight Information</h2>
            <FlightCard flight={flightData} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Search