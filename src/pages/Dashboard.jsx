import React from 'react';
import Navbar from '../components/Navbar';
import FlightSearch from '../components/FlightSearch';
import History from '../components/History';

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      
      <div className="dashboard-content">
        <div className="welcome-section">
          <div className="welcome-text">
            <h1>Welcome to SkyWatch</h1>
            <p>Your personal flight tracking companion. Stay updated with real-time flight information and never miss a departure again.</p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🛫</div>
              <div className="stat-info">
                <h3>12</h3>
                <p>Flights Tracked</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏰</div>
              <div className="stat-info">
                <h3>3</h3>
                <p>Active Alerts</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📍</div>
              <div className="stat-info">
                <h3>8</h3>
                <p>Airports Visited</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="main-grid">
          <div className="search-section">
            <FlightSearch />
          </div>
          
          <div className="history-section">
            <History />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;