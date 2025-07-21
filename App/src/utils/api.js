const API_KEY = '0cf9be5dd527091d3ac21d0d337271c0'

export const searchFlight = async (flightNumber) => {
  try {
    // In a real app, this would call an actual API
    // For demo purposes, we'll simulate API calls
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock response based on flight number
    const airlineCode = flightNumber.substring(0, 2).toUpperCase()
    const flightNum = flightNumber.substring(2)
    
    const airlines = {
      'DL': 'Delta Airlines',
      'AA': 'American Airlines',
      'UA': 'United Airlines',
      'BA': 'British Airways'
    }
    
    const airline = airlines[airlineCode] || 'Unknown Airline'
    
    const statuses = ['On Time', 'Delayed', 'Cancelled', 'Boarding']
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]
    
    const airports = ['JFK, New York', 'LAX, Los Angeles', 'ORD, Chicago', 'DFW, Dallas', 'LHR, London']
    const randomDeparture = airports[Math.floor(Math.random() * airports.length)]
    const randomArrival = airports.filter(a => a !== randomDeparture)[Math.floor(Math.random() * (airports.length - 1))]
    
    const hours = Math.floor(Math.random() * 12) + 1
    const minutes = Math.floor(Math.random() * 60)
    const ampm = Math.random() > 0.5 ? 'AM' : 'PM'
    const departureTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`
    
    return {
      airline,
      flight_iata: flightNumber,
      status: randomStatus,
      departure: {
        airport: randomDeparture,
        time: departureTime,
        terminal: Math.floor(Math.random() * 5) + 1,
        gate: String.fromCharCode(65 + Math.floor(Math.random() * 5)) + (Math.floor(Math.random() * 30) + 1)
      },
      arrival: {
        airport: randomArrival,
        time: `${hours + Math.floor(Math.random() * 3) + 1}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`
      }
    }
  } catch (error) {
    console.error('Error searching flight:', error)
    return null
  }
}