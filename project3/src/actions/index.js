import axios from 'axios';

const API_KEY = 'd8bc0370aebef0d539ec1991485bb6c5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&appid=d8bc0370aebef0d539ec1991485bb6c5`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
