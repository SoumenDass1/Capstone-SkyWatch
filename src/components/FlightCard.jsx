import React from 'react';

function FlightCard({ flight }) {
  return (
    <div className="flight-card">
      <h3>{flight.flightNumber}</h3>
      <p>Status: {flight.status}</p>
      <p>Departure: {flight.departure}</p>
      <p>Arrival: {flight.arrival}</p>
    </div>
  );
}

export default FlightCard;
