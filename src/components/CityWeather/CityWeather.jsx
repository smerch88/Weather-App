import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { getCityWeather } from 'redux/weather/weather-selectors';

export const CityWeather = () => {
  const cityWeather = useSelector(getCityWeather);

  return (
    <>
      <Typography variant="h2">Weather</Typography>
      <ul>
        <li>
          Geo coords: [{cityWeather?.coord?.lon}, {cityWeather?.coord?.lat}]
        </li>
        <li>
          Weather: {cityWeather?.weather?.[0]?.main},{' '}
          {cityWeather?.weather?.[0]?.description}.
        </li>
        <li>Temperature: {cityWeather?.main?.temp}</li>
        <li>Feels like: {cityWeather?.main?.feels_like}</li>
        <li>Minimum temperature: {cityWeather?.main?.temp_min}</li>
        <li>Maximum temperature: {cityWeather?.main?.temp_max}</li>
        <li>Pressure: {cityWeather?.main?.pressure}</li>
        <li>Humidity: {cityWeather?.main?.humidity}</li>
        <li>Sea Level: {cityWeather?.main?.sea_level}</li>
        <li>Ground Level: {cityWeather?.main?.grnd_level}</li>
        <li>Visibility: {cityWeather?.visibility}</li>
        <li>Wind Speed: {cityWeather?.wind?.speed}</li>
        <li>Wind Degree: {cityWeather?.wind?.deg}</li>
        <li>Wind Gust: {cityWeather?.wind?.gust}</li>
        <li>Name: {cityWeather?.name}</li>
        <li>Cod: {cityWeather?.cod}</li>
      </ul>
    </>
  );
};
