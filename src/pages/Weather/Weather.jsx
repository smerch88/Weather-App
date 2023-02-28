import { CityListRender } from 'components/CityListRender/CityListRender';
import { CitySearchForm } from 'components/CitySearchForm/CitySearchForm';
import { CityWeather } from 'components/CityWeather/CityWeather';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCityWeather } from 'redux/weather/weather-selectors';

const Weather = () => {
  const [originalCity, setOriginalCity] = useState('');
  const cityWeather = useSelector(getCityWeather);

  return (
    <>
      <CitySearchForm setOriginalCity={setOriginalCity} />
      <CityListRender setOriginalCity={setOriginalCity} />
      {cityWeather.length === 0 ? null : (
        <CityWeather originalCity={originalCity} />
      )}
    </>
  );
};

export default Weather;
