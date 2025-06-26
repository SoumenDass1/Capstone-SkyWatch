import React from 'react';
import Navbar from '../components/Navbar';
import FlightSearch from '../components/FlightSearch';
import History from '../components/History';

function Dashboard() {
  return (
    <>
      <Navbar />
      <FlightSearch />
      <History />
    </>
  );
}

export default Dashboard;
