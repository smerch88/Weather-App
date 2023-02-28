import { Button, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetCordinatesWeather } from 'redux/weather/weather-operations';
import {
  getCities,
  getIsLoadingWeather,
} from 'redux/weather/weather-selectors';

export const CityListRender = () => {
  const dispatch = useDispatch();
  const cityNames = useSelector(getCities);
  const isLoading = useSelector(getIsLoadingWeather);

  const onClickHandler = (event, cityName) => {
    const coordinates = {
      lat: event.target.dataset.lat,
      lon: event.target.dataset.lon,
      units: event.target.dataset.units,
    };
    dispatch(fetchGetCordinatesWeather(coordinates));
  };

  return (
    <ul>
      {cityNames &&
        cityNames.map(item => (
          <li key={item?.lat + item?.lon}>
            <ul>
              <li> City: {item?.name ?? 'no information available'}</li>
              <li> State: {item?.state ?? 'no information available'}</li>
              <li> Country: {item?.country ?? 'no information available'}</li>
              <li> lat: {item?.lat ?? 'no information available'}</li>
              <li> lon: {item?.lon ?? 'no information available'}</li>
            </ul>
            <Button
              type="button"
              onClick={event => onClickHandler(event, item.name)}
              data-lat={item?.lat}
              data-lon={item?.lon}
              data-units="metric"
              fullWidth
              sx={{ position: 'relative' }}
            >
              Check Weather
              {isLoading && (
                <CircularProgress
                  size={24}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </Button>
          </li>
        ))}
    </ul>
  );
};
