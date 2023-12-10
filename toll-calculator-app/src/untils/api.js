// utils/api.js
const TOLLGURU_API_KEY = 'your-api-key'; // Replace with your TollGuru API key

const getTollDetails = async (startLocation, endLocation) => {
  const apiUrl = `https://api.tollguru.com/v1/calculate_toll?from=${startLocation.join(',')}&to=${endLocation.join(',')}&vehicleType=2AxlesAuto&departure_time=2023-01-01T08%3A00%3A00%2B00%3A00&key=${TOLLGURU_API_KEY}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch toll details. Status: ${response.status}`);    
    }

    const data = await response.json();

    // Assuming toll details are in the 'data' object, adjust accordingly based on API response structure
    const tollDetails = {
      polyline: data.routes[0].overview_polyline,
      tolls: data.routes[0].tolls,
    };

    return tollDetails;
  } catch (error) {
    console.error('Error fetching toll details:', error);
    throw error; // Rethrow the error for the calling code to handle
  }
};

export { getTollDetails };
