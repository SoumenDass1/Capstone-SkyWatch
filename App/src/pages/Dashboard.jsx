import FlightCard from '../components/FlightCard'
import FlipCard from '../components/FlipCard'

const Dashboard = () => {
  const featuredFlights = [
    {
      airline: "Delta Airlines",
      flight_iata: "DL123",
      status: "On Time",
      departure: {
        airport: "JFK, New York",
        time: "10:00 AM"
      },
      arrival: {
        airport: "LAX, Los Angeles",
        time: "1:30 PM"
      }
    },
    {
      airline: "American Airlines",
      flight_iata: "AA456",
      status: "Delayed",
      departure: {
        airport: "ORD, Chicago",
        time: "2:00 PM"
      },
      arrival: {
        airport: "DFW, Dallas",
        time: "4:30 PM"
      }
    }
  ]

  return (
    <div className="container">
      <h1 className="text-center mb-20">Welcome to SkyWatch</h1>
      <p className="text-center mb-20">Track real-time flight status and information</p>
      
      <div className="featured-flights">
        <h2>Featured Flights</h2>
        {featuredFlights.map((flight, index) => (
          <FlipCard
            key={index}
            frontContent={<FlightCard flight={flight} />}
            backContent={
              <div className="flight-details-more">
                <h3>Additional Details</h3>
                <p>Terminal: {flight.departure.terminal || 'N/A'}</p>
                <p>Gate: {flight.departure.gate || 'N/A'}</p>
                <p>Duration: 5h 30m</p>
              </div>
            }
          />
        ))}
      </div>
    </div>
  )
}

export default Dashboard