/* eslint-disable no-unused-vars */
import { Typography, List } from '@mui/material';
import { BackLink } from 'components/BackLink/BackLink';
import { formatTemperature } from 'components/CityWeather/CityWeather';
import { RenderWeatherDataItem } from 'components/CityWeather/RenderWeatherDataItem';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import { getCityWeather } from 'redux/weather/weather-selectors';

export const DetailedWeather = () => {
  const cityWeather = useSelector(getCityWeather);
  const { cityName } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/weather';

  const {
    coord: { lon, lat },
    weather: [{ id, main, description, icon }],
    base,
    main: {
      temp,
      feels_like,
      temp_min,
      temp_max,
      pressure,
      humidity,
      sea_level,
      grnd_level,
    },
    visibility,
    wind: { speed, deg, gust },
    clouds: { all },
    dt,
    sys: { country, sunrise, sunset },
    id: cityId,
    name,
    cod,
  } = cityWeather;

  const formatTime = unixDate => {
    const date = new Date(unixDate * 1000);
    const hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    const formattedTime = hours + ':' + minutes + ':' + seconds;
    return formattedTime;
  };

  const formatedDt = formatTime(dt);
  const formatedSunrise = formatTime(sunrise);
  const formatedSunset = formatTime(sunset);

  return (
    <>
      <BackLink to={backLinkHref}>Back</BackLink>

      <Typography variant="h3" component="h1">
        Weather in {cityName} in Details
      </Typography>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather_image"
      />
      <List>
        {RenderWeatherDataItem(
          'City geo location (longtitude, latitude)',
          `[${lon}, ${lat}]`
        )}
        {RenderWeatherDataItem('Weather', `${main}, ${description}`)}
        {RenderWeatherDataItem('Temperature', `${formatTemperature(temp)}℃`)}
        {RenderWeatherDataItem(
          'Feels like (this temperature parameter accounts for the human perception of weather)',
          `${formatTemperature(feels_like)}℃`
        )}
        {RenderWeatherDataItem(
          'Minimum temperature at the moment. This is minimal currently observed temperature (within large megalopolises and urban areas)',
          `${formatTemperature(temp_min)}℃`
        )}
        {RenderWeatherDataItem(
          'Maximum temperature at the moment. This is maximal currently observed temperature (within large megalopolises and urban areas)',
          `${formatTemperature(temp_max)}℃`
        )}
        {RenderWeatherDataItem(
          'Atmospheric pressure (on the sea level)',
          `${pressure} hPa`
        )}
        {RenderWeatherDataItem('Humidity', `${humidity} %`)}
        {RenderWeatherDataItem(
          'Atmospheric pressure on the sea level',
          `${sea_level} hPa`
        )}
        {RenderWeatherDataItem(
          'Atmospheric pressure on the ground level',
          `${grnd_level} hPa`
        )}
        {RenderWeatherDataItem('Visibility', `${visibility} meters`)}
        {RenderWeatherDataItem('Wind speed.', `${speed} meter/sec`)}
        {RenderWeatherDataItem(
          'Wind direction',
          `${deg} degrees (meteorological)`
        )}
        {RenderWeatherDataItem('Wind gust', `${gust} meter/sec`)}
        {RenderWeatherDataItem('Cloudiness', `${all} %`)}
        {RenderWeatherDataItem('Time of data calculation', `${formatedDt}`)}
        {RenderWeatherDataItem('Country Code', `${country}`)}
        {RenderWeatherDataItem('Sunrise time', `${formatedSunrise}`)}
        {RenderWeatherDataItem('Sunset time', `${formatedSunset}`)}
        {RenderWeatherDataItem('Station location City name', `${name}`)}
      </List>
    </>
  );
};
