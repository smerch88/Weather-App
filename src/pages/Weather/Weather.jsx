import { Container, useTheme } from '@mui/material';
import { CityListRender } from 'components/CityListRender/CityListRender';
import { CitySearchForm } from 'components/CitySearchForm/CitySearchForm';
import { CityWeather } from 'components/CityWeather/CityWeather';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCityWeather } from 'redux/weather/weather-selectors';
import { Box } from '@mui/material';

import gif from '../../images/climate_change_map.gif';
import { StyledImg } from './Weather.Styled';

const Weather = () => {
  const [originalCity, setOriginalCity] = useState('');
  const cityWeather = useSelector(getCityWeather);
  const theme = useTheme();

  return (
    <>
      <Container sx={{ padding: theme.spacing(2) }}>
        <CitySearchForm />
        <CityListRender setOriginalCity={setOriginalCity} />
        {originalCity.length === 0 || cityWeather.length === 0 ? (
          <Box
            sx={{ borderRadius: '20px', overflow: 'hidden', height: '350px' }}
          >
            <StyledImg src={gif} alt="wether_changing" />
          </Box>
        ) : (
          <CityWeather originalCity={originalCity} />
        )}
      </Container>
    </>
  );
};

export default Weather;
