import PropTypes from 'prop-types';
import {
  Typography,
  Link,
  List,
  CircularProgress,
  Button,
  useTheme,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCityWeather } from 'redux/weather/weather-selectors';
import { RenderWeatherDataItem } from './RenderWeatherDataItem';
import { MapWithMarker } from 'components/MapWithMarker/MapWithMarker';

import bg from '../../images/bgWeatherCard.jpg';

export const formatTemperature = temperature => {
  return temperature.toFixed(1);
};

export const CityWeather = ({ originalCity }) => {
  const cityWeather = useSelector(getCityWeather);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleViewDetailsClick = () => {
    navigate(`/weather/${originalCity}/details`);
  };

  if (
    !cityWeather ||
    !cityWeather.coord ||
    !cityWeather.weather ||
    !cityWeather.main ||
    !cityWeather.wind
  ) {
    return (
      <CircularProgress
        size={24}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginTop: '-12px',
          marginLeft: '-12px',
          color: 'rgba(255,255,255,0.5)',
        }}
      />
    );
  }

  const {
    weather: [{ main: weatherMain, description: weatherDescription, icon }],
    main: { temp, feels_like: feelsLike, pressure, humidity },
    wind: { speed: windSpeed },
  } = cityWeather;

  return (
    <>
      <Typography variant="h2" component="h1">
        Weather in {originalCity}
      </Typography>
      <List
        sx={{
          border: '1px solid black',
          borderRadius: theme.spacing(2),
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          color: 'white',
          textShadow: '0 0 4px black',
          fontSize: '25px',
          justifyContent: 'space-evenly',
          marginBottom: theme.spacing(2),
        }}
      >
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather_image"
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {RenderWeatherDataItem(
            'Weather',
            `${weatherMain}, ${weatherDescription}`
          )}
          {RenderWeatherDataItem('Temperature', `${formatTemperature(temp)}℃`)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {RenderWeatherDataItem(
            'Feels like',
            `${formatTemperature(feelsLike)}℃`
          )}
          {RenderWeatherDataItem('Pressure', `${pressure} hpa`)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {RenderWeatherDataItem('Humidity', `${humidity} %`)}
          {RenderWeatherDataItem('Wind Speed', `${windSpeed} m/s`)}
        </div>
      </List>
      <Button
        fullWidth
        color="primary"
        variant="contained"
        onClick={handleViewDetailsClick}
        component={Link}
        aria-label={`View details for ${originalCity}`}
        sx={{ marginBottom: theme.spacing(2) }}
      >
        View Details
      </Button>
      <MapWithMarker lat={cityWeather.coord.lat} lon={cityWeather.coord.lon} />
    </>
  );
};

CityWeather.propTypes = {
  originalCity: PropTypes.string.isRequired,
};
