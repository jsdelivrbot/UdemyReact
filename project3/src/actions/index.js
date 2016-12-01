const API_KEY = 'd8bc0370aebef0d539ec1991485bb6c5';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(){
  return {
    type: FETCH_WEATHER
  }
}
