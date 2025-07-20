import React, { useState } from 'react';

function History() {
  const [searches] = useState([
    { flight: 'AI202', date: '2025-06-28', status: 'On Time' },
    { flight: '6E111', date: '2025-06-27', status: 'Delayed' },
    { flight: 'SG101', date: '2025-06-26', status: 'Landed' },
    { flight: 'UK955', date: '2025-06-25', status: 'Cancelled' },
    { flight: 'AI131', date: '2025-06-24', status: 'On Time' }
  ]);

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'on time': return '✅';
      case 'delayed': return '⏰';
      case 'landed': return '🛬';
      case 'cancelled': return '❌';
      default: return '📋';
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="history-container">
      <div className="history-header">
        <h2>Search History</h2>
        <p>Your recent flight searches</p>
      </div>

      <div className="history-list">
        {searches.length > 0 ? (
          searches.map((item, index) => (
            <div key={index} className="history-item">
              <div className="history-left">
                <div className="flight-info">
                  <span className="flight-number">{item.flight}</span>
                  <span className="search-date">{formatDate(item.date)}</span>
                </div>
              </div>

              <div className="history-right">
                <div className={`history-status ${item.status.toLowerCase().replace(' ', '-')}`}>
                  <span className="status-icon">{getStatusIcon(item.status)}</span>
                  <span className="status-text">{item.status}</span>
                </div>
                <button className="search-again-btn">
                  Search Again
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-history">
            <div className="empty-icon">📋</div>
            <h3>No Search History</h3>
            <p>Your flight searches will appear here</p>
          </div>
        )}
      </div>

      {searches.length > 0 && (
        <div className="history-footer">
          <button className="clear-history-btn">
            Clear All History
          </button>
        </div>
      )}
    </div>
  );
}

export default History;