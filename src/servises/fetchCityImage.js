import axios from 'axios';

const AccessKey = '4ZHunIuaK6r6ZZLT4aiTW4c6rG3BHlnbQ8leEi7_6DQ';
const Secretkey = 'ZVrUPGd4lMJL6MKAo4YY0QBSc6--weA3oxURnqyJOSw';


export const fetchCityImage = async cityName => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: cityName,
        per_page: 1, // Получать только одно изображение
        client_id: AccessKey, // Замените на свой API ключ
      },
    });

    if (response.data.results && response.data.results.length > 0) {
      return response.data.results[0].urls.regular;
    } else {
      return null; // Если нет изображений, возвращаем null
    }
  } catch (error) {
    console.error('Error fetching city image:', error);
    return null;
  }
};
