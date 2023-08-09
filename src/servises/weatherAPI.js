import axios from 'axios';
const KEY = 'DDLGU28WFPBC2JGBBXPRZ8LQX';
axios.defaults.baseURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;


export async function fetchFromToWeather(city, date1, date2) {
  try {
    const response = await axios(`%5b${city}%5b/${date1}/${date2}`, {
      params: {
        key: KEY,
        unitGroup: 'metric',
        include: 'days',
        contentType: 'json',
      },
    });
    
    return response.data.days;
  } catch (error) {
    console.log('🚀 ~ fetchFromToWeather ~ error:', error);
  }
}

export async function fetchTodayWeather(city) {
  try {
    const response = await axios(`%5b${city}%5b/today`, {
      params: {
        key: KEY,
        unitGroup: 'metric',
        include: 'days',
        contentType: 'json',
      },
    });
    return response.data;
  } catch (error) {
    console.log('🚀 ~ fetchFromToWeather ~ error:', error);
  }
}
