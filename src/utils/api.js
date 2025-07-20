const API_KEY = '64f18f96c70adedf891129768044030a';
const BASE_URL = 'http://api.aviationstack.com/v1';

export const fetchFlightStatus = async (flightNumber) => {
  try {
    const res = await fetch(
      `${BASE_URL}/flights?access_key=${API_KEY}&flight_iata=${flightNumber}`
    );
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();

    if (data && data.data && data.data.length > 0) {
      const flight = data.data[0];
      
      const formatTime = (dateTime) => {
        if (!dateTime) return null;
        const date = new Date(dateTime);
        return date.toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: true 
        });
      };

      return {
        flightNumber: flight.flight.iata || flightNumber,
        status: flight.flight_status || 'Unknown',
        departure: flight.departure?.airport || 'Unknown Airport',
        arrival: flight.arrival?.airport || 'Unknown Airport',
        departureTime: formatTime(flight.departure?.scheduled),
        arrivalTime: formatTime(flight.arrival?.scheduled),
        gate: flight.departure?.gate,
        terminal: flight.departure?.terminal,
        delay: flight.departure?.delay ? `${flight.departure.delay} min` : null,
        aircraft: flight.aircraft?.registration,
        airline: flight.airline?.name
      };
    } else {
      return {
        flightNumber,
        status: 'Not Found',
        departure: 'Unknown',
        arrival: 'Unknown',
        departureTime: null,
        arrivalTime: null,
        gate: null,
        terminal: null,
        delay: null
      };
    }
  } catch (err) {
    console.error('Flight API Error:', err);
    
    return {
      flightNumber,
      status: 'Error',
      departure: 'Unable to fetch',
      arrival: 'Unable to fetch',
      departureTime: null,
      arrivalTime: null,
      gate: null,
      terminal: null,
      delay: null,
      error: err.message
    };
  }
};