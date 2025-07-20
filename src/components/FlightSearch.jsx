import React, { useState } from 'react';
import FlightCard from './FlightCard';
import { fetchFlightStatus } from '../utils/api';

function FlightSearch() {
  const [flightNumber, setFlightNumber] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!flightNumber.trim()) {
      setError('Please enter a flight number');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const data = await fetchFlightStatus(flightNumber);
      setResult(data);
    } catch (err) {
      setError('Failed to fetch flight data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <div className="search-header">
        <h2>Track Your Flight</h2>
        <p>Enter your flight number to get real-time status updates</p>
      </div>

      <div className="search-box">
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter Flight Number (e.g., AI202, 6E111)"
            value={flightNumber}
            onChange={e => setFlightNumber(e.target.value.toUpperCase())}
            onKeyPress={handleKeyPress}
            className={error ? 'error' : ''}
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className={loading ? 'loading' : ''}
          >
            {loading ? (
              <div className="spinner"></div>
            ) : (
              <>
                <span>🔍</span>
                Search
              </>
            )}
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}
      </div>

      <div className="search-results">
        {result && (
          <div className="result-container">
            <FlightCard flight={result} />
          </div>
        )}

        {!result && !loading && !error && (
          <div className="empty-state">
            <div className="empty-icon">🛩️</div>
            <h3>Ready to Track</h3>
            <p>Enter a flight number above to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FlightSearch;