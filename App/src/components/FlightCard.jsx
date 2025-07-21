const FlightCard = ({ flight }) => {
  return (
    <div className="card flight-card">
      <div className="flight-header">
        <h3>{flight.airline} - Flight {flight.flight_iata}</h3>
        <span className={`status ${flight.status.toLowerCase()}`}>{flight.status}</span>
      </div>
      <div className="flight-details">
        <div className="departure">
          <h4>Departure</h4>
          <p>{flight.departure.airport}</p>
          <p>{flight.departure.time}</p>
        </div>
        <div className="arrow">→</div>
        <div className="arrival">
          <h4>Arrival</h4>
          <p>{flight.arrival.airport}</p>
          <p>{flight.arrival.time}</p>
        </div>
      </div>
    </div>
  )
}

export default FlightCard