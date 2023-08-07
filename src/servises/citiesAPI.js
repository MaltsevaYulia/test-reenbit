import axios from 'axios';

export const fetchCities = async () => {
  try {
    const response = await axios.get(
      'https://api.teleport.org/api/urban_areas/'
    );

    const cities = response.data._links['ua:item'].map(item => {
      return {
        city: item.name,
        url: item.href,
      };
    });

    return cities;
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
};
