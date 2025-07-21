import FlightCard from '../components/FlightCard'
import FlipCard from '../components/FlipCard'
import './Dashboard.css'

const Dashboard = () => {
  const featuredFlights = [
    {
      airline: "Air India",
      flight_iata: "AI101",
      status: "On Time",
      departure: {
        airport: "DEL, Delhi",
        time: "10:30 PM",
        terminal: "3",
        gate: "15A"
      },
      arrival: {
        airport: "BOM, Mumbai",
        time: "12:45 AM",
        terminal: "2",
        gate: "43B"
      }
    },
    {
      airline: "Delta Airlines",
      flight_iata: "DL123",
      status: "On Time",
      departure: {
        airport: "JFK, New York",
        time: "10:00 AM",
        terminal: "4",
        gate: "B12"
      },
      arrival: {
        airport: "LAX, Los Angeles",
        time: "1:30 PM",
        terminal: "7",
        gate: "A5"
      }
    },
    {
      airline: "American Airlines",
      flight_iata: "AA456",
      status: "Delayed",
      departure: {
        airport: "ORD, Chicago",
        time: "2:00 PM",
        terminal: "3",
        gate: "C8"
      },
      arrival: {
        airport: "DFW, Dallas",
        time: "4:30 PM",
        terminal: "2",
        gate: "D15"
      }
    },
    {
      airline: "United Airlines",
      flight_iata: "UA789",
      status: "On Time",
      departure: {
        airport: "SFO, San Francisco",
        time: "8:15 AM",
        terminal: "1",
        gate: "G7"
      },
      arrival: {
        airport: "MIA, Miami",
        time: "4:45 PM",
        terminal: "3",
        gate: "F2"
      }
    },
    {
      airline: "Emirates",
      flight_iata: "EK202",
      status: "Boarding",
      departure: {
        airport: "DXB, Dubai",
        time: "9:30 PM",
        terminal: "3",
        gate: "A1"
      },
      arrival: {
        airport: "JFK, New York",
        time: "5:15 AM",
        terminal: "4",
        gate: "B7"
      }
    },
    {
      airline: "Lufthansa",
      flight_iata: "LH401",
      status: "On Time",
      departure: {
        airport: "FRA, Frankfurt",
        time: "11:20 AM",
        terminal: "1",
        gate: "Z12"
      },
      arrival: {
        airport: "ORD, Chicago",
        time: "2:45 PM",
        terminal: "5",
        gate: "K3"
      }
    },
    {
      airline: "Air France",
      flight_iata: "AF177",
      status: "Cancelled",
      departure: {
        airport: "CDG, Paris",
        time: "7:40 AM",
        terminal: "2E",
        gate: "34"
      },
      arrival: {
        airport: "ATL, Atlanta",
        time: "11:25 AM",
        terminal: "F",
        gate: "12"
      }
    },
    {
      airline: "Qatar Airways",
      flight_iata: "QR701",
      status: "On Time",
      departure: {
        airport: "DOH, Doha",
        time: "1:15 AM",
        terminal: "1",
        gate: "A3"
      },
      arrival: {
        airport: "LHR, London",
        time: "6:45 AM",
        terminal: "3",
        gate: "B9"
      }
    },
    {
      airline: "Singapore Airlines",
      flight_iata: "SQ21",
      status: "Delayed",
      departure: {
        airport: "SIN, Singapore",
        time: "8:30 PM",
        terminal: "3",
        gate: "A8"
      },
      arrival: {
        airport: "EWR, New York",
        time: "6:15 AM",
        terminal: "B",
        gate: "42"
      }
    }
  ]

  return (
    <div className="dashboard-container">
      <div className="flight-cards-grid">
        {featuredFlights.map((flight, index) => (
          <FlipCard
            key={index}
            frontContent={
              <div className="flight-card-front">
                <div className="flight-number">{flight.flight_iata}</div>
                <div className="flight-route">
                  {flight.departure.airport} → {flight.arrival.airport}
                </div>
                <div className={`flight-status ${flight.status.toLowerCase().replace(' ', '-')}`}>
                  {flight.status}
                </div>
              </div>
            }
            backContent={
              <div className="flight-card-back">
                <h3>{flight.airline}</h3>
                <div className="flight-details">
                  <div className="detail-group">
                    <span className="detail-label">Departure:</span>
                    <span>{flight.departure.time} ({flight.departure.airport})</span>
                    <span>Terminal: {flight.departure.terminal}</span>
                    <span>Gate: {flight.departure.gate}</span>
                  </div>
                  <div className="detail-group">
                    <span className="detail-label">Arrival:</span>
                    <span>{flight.arrival.time} ({flight.arrival.airport})</span>
                    <span>Terminal: {flight.arrival.terminal}</span>
                    <span>Gate: {flight.arrival.gate}</span>
                  </div>
                </div>
              </div>
            }
          />
        ))}
      </div>
    </div>
  )
}

export default Dashboard