import { CityListRender } from 'components/CityListRender/CityListRender';
import { CitySearchForm } from 'components/CitySearchForm/CitySearchForm';
import { CityWeather } from 'components/CityWeather/CityWeather';
import { useSelector } from 'react-redux';
import { getCityWeather } from 'redux/weather/weather-selectors';

const Weather = () => {
  const cityWeather = useSelector(getCityWeather);
  console.log(cityWeather);

  return (
    <>
      <CitySearchForm />
      <CityListRender />
      {cityWeather.length === 0 ? null : <CityWeather />}
    </>
  );
};

export default Weather;
