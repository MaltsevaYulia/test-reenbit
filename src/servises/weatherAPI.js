import axios from 'axios';
const KEY = 'DDLGU28WFPBC2JGBBXPRZ8LQX';
axios.defaults.baseURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;
//API for getting forecas https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[city]/[date1]/[date2]?unitGroup=metric&include=days&key=${KEY}&contentType=json
//from - to for the city
//API for getting today’s https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[city]/today?unitGroup=metric&include=days&key=${KEY}&contentType=json
//weather for the city

export async function fetchFromToWeather(city, date1, date2 = "") {
    try {
      const response = await axios(
        `%5b${city}%5b/%5b${date1}%5b/%5b${date2}%5b`,
        {
          params: {
            key: KEY,
            unitGroup: 'metric',
            include: 'days',
            contentType: 'json',
          },
        }
      );
    console.log('🚀 ~ fetchFromToWeather ~ response:', response);
//   return response.data._embedded.events;  
    } catch (error) {
        console.log("🚀 ~ fetchFromToWeather ~ error:", error)
        
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
    console.log('🚀 ~ fetchFromToWeather ~ response:', response);
    //   return response.data._embedded.events;
  } catch (error) {
    console.log('🚀 ~ fetchFromToWeather ~ error:', error);
  }
}

// export async function fetchEvents() {
//   const response = await axios('events', {
//     params: {
//       apikey: KEY,
//       size: 20,
//     },
//   });
//   return response.data._embedded.events;
// }

// export async function fetchEventById(id) {
//   const response = await axios(`events/${id}`, {
//     params: {
//       apikey: KEY,
//     },
//   });
//   return response.data;
// }

// export async function fetchEventsByName(keyword) {
//   const response = await axios('events', {
//     params: {
//       apikey: KEY,
//       size: 20,
//       keyword,
//     },
//   });
//   return response.data._embedded.events;
// }
