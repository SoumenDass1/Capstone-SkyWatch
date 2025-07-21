import { useState } from 'react'
import FlightCard from '../components/FlightCard'
import { searchFlight } from '../utils/api'

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
    <div className="container">
      <h1 className="mb-20">Search Flight Status</h1>
      
      <form onSubmit={handleSearch} className="card mb-20">
        <div className="form-group">
          <label htmlFor="flightNumber">Flight Number (e.g., DL123)</label>
          <input
            type="text"
            id="flightNumber"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            placeholder="Enter flight number"
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Searching...' : 'Search Flight'}
        </button>
      </form>

      {error && <div className="card error">{error}</div>}

      {flightData && (
        <div className="flight-result">
          <h2>Flight Information</h2>
          <FlightCard flight={flightData} />
        </div>
      )}
    </div>
  )
}

export default Search