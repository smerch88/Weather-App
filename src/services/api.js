import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const LIMIT = 5;

export const weatherService = axios.create({
  baseURL: 'http://api.openweathermap.org/',
});

export const getCityCoordinates = async ({ city, state, country }) => {
  try {
    const { data } = await weatherService.get(
      `geo/1.0/direct?q=${city},${state},${country}&limit=${LIMIT}&appid=${API_KEY}`
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getCordinatesWeather = async ({ lat, lon, units }) => {
  try {
    const { data } = await weatherService.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`
    );
    return data;
  } catch (error) {
    return error;
  }
};
