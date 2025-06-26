const API_KEY = '64f18f96c70adedf891129768044030a';
const BASE_URL = 'http://api.aviationstack.com/v1';

export const fetchFlightStatus = async (flightNumber) => {
  try {
    const res = await fetch(
      `${BASE_URL}/flights?access_key=${API_KEY}&flight_iata=${flightNumber}`
    );
    const data = await res.json();

    if (data && data.data && data.data.length > 0) {
      const flight = data.data[0];
      return {
        flightNumber: flight.flight.iata,
        status: flight.flight_status,
        departure: `${flight.departure.airport} (${flight.departure.iata})`,
        arrival: `${flight.arrival.airport} (${flight.arrival.iata})`,
      };
    } else {
      return {
        flightNumber,
        status: 'Not Found',
        departure: '-',
        arrival: '-',
      };
    }
  } catch (err) {
    console.error(err);
    return {
      flightNumber,
      status: 'Error',
      departure: '-',
      arrival: '-',
    };
  }
};
