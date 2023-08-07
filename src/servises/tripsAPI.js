import axios from 'axios';

export const fetchTrips = async () => {
  try {
    const response = await axios.get(
      'https://64d0bddeff953154bb7962f2.mockapi.io/trips/'
      );
      return response.data;
      
      
  } catch (error) {
    console.error('Error fetching trips:', error);
    return [];
  }
};
