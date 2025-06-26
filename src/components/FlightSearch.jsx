import React, { useState } from 'react';
import FlightCard from './FlightCard';
import { fetchFlightStatus } from '../utils/api';

function FlightSearch() {
  const [flightNumber, setFlightNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    const data = await fetchFlightStatus(flightNumber);
    setResult(data);
  };

  return (
    <div className="search-box">
      <input
        placeholder="Enter Flight Number"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {result && <FlightCard flight={result} />}
    </div>
  );
}

export default FlightSearch;
