import React from 'react';

function FlightCard({ flight }) {
  return (
    <div className="flight-card">
      <div className="flight-header">
        <div className="flight-number">
          <span className="flight-icon">✈️</span>
          <h3>{flight.flightNumber}</h3>
        </div>
        <div className={`status-badge ${flight.status.toLowerCase().replace(' ', '-')}`}>
          {flight.status}
        </div>
      </div>
      
      <div className="flight-route">
        <div className="airport departure">
          <div className="airport-code">{flight.departure.split('(')[1]?.replace(')', '') || 'DEP'}</div>
          <div className="airport-name">{flight.departure.split('(')[0]?.trim() || flight.departure}</div>
          <div className="time">{flight.departureTime || '--:--'}</div>
        </div>
        
        <div className="route-line">
          <div className="plane-icon">🛫</div>
          <div className="dotted-line"></div>
        </div>
        
        <div className="airport arrival">
          <div className="airport-code">{flight.arrival.split('(')[1]?.replace(')', '') || 'ARR'}</div>
          <div className="airport-name">{flight.arrival.split('(')[0]?.trim() || flight.arrival}</div>
          <div className="time">{flight.arrivalTime || '--:--'}</div>
        </div>
      </div>
      
      <div className="flight-details">
        <div className="detail-item">
          <span className="label">Gate:</span>
          <span className="value">{flight.gate || 'TBA'}</span>
        </div>
        <div className="detail-item">
          <span className="label">Terminal:</span>
          <span className="value">{flight.terminal || 'TBA'}</span>
        </div>
        <div className="detail-item">
          <span className="label">Delay:</span>
          <span className="value">{flight.delay || 'On Time'}</span>
        </div>
      </div>
    </div>
  );
}

export default FlightCard;