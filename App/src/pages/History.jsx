import FlightCard from '../components/FlightCard'

const History = ({ history }) => {
  return (
    <div className="container">
      <h1 className="mb-20">Your Flight History</h1>
      
      {history.length === 0 ? (
        <div className="card">
          <p>No flight history yet. Search for flights to see them here.</p>
        </div>
      ) : (
        <div className="flight-history">
          {history.map((flight, index) => (
            <FlightCard key={index} flight={flight} />
          ))}
        </div>
      )}
    </div>
  )
}

export default History