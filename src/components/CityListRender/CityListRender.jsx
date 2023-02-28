import {
  Button,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { fetchGetCordinatesWeather } from 'redux/weather/weather-operations';
import {
  getCities,
  getIsLoadingWeather,
} from 'redux/weather/weather-selectors';

export const CityListRender = ({ setOriginalCity }) => {
  const dispatch = useDispatch();
  const cityNames = useSelector(getCities);
  const isLoading = useSelector(getIsLoadingWeather);

  const onClickHandler = (event, cityName) => {
    event.preventDefault();
    setOriginalCity(cityName);
    const coordinates = {
      lat: event.target.dataset.lat,
      lon: event.target.dataset.lon,
      units: event.target.dataset.units,
    };
    dispatch(fetchGetCordinatesWeather(coordinates));
  };

  return (
    <List sx={{ overflowY: 'scroll', maxHeight: '170px' }}>
      {cityNames &&
        cityNames.map(item => (
          <ListItem key={item?.lat + item?.lon}>
            <ListItemText
              primary={`City: ${item?.name ?? 'no information available'}`}
              secondary={
                <>
                  <Typography component="span" sx={{ margin: 1 }}>
                    State: {item?.state ?? 'no information available'}
                  </Typography>
                  <Typography component="span" sx={{ margin: 1 }}>
                    Country: {item?.country ?? 'no information available'}
                  </Typography>
                  <Typography component="span" sx={{ margin: 1 }}>
                    lat: {item?.lat ?? 'no information available'}
                  </Typography>
                  <Typography component="span" sx={{ margin: 1 }}>
                    lon: {item?.lon ?? 'no information available'}
                  </Typography>
                </>
              }
            />
            <Button
              variant="contained"
              onClick={event => onClickHandler(event, item.name)}
              data-lat={item?.lat}
              data-lon={item?.lon}
              data-units="metric"
              disabled={isLoading}
              sx={{ ml: 2 }}
            >
              {isLoading ? <CircularProgress size={24} /> : 'Check Weather'}
            </Button>
          </ListItem>
        ))}
    </List>
  );
};
