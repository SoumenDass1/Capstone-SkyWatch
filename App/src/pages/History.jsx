import FlightCard from '../components/FlightCard'
import './history.css'

const History = ({ history }) => {
  return (
    <div className="history-container">
      <div className="history-content">
        <h1 className="history-title">Your Flight History</h1>
        
        {history.length === 0 ? (
          <div className="empty-history">
            <p>No flight history yet. Search for flights to see them here.</p>
          </div>
        ) : (
          <div className="flight-history-grid">
            {history.map((flight, index) => (
              <FlightCard key={index} flight={flight} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default History