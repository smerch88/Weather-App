import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <>
      <Container>
        <Typography variant="h2" component="h1" mb>
          Welcome to the Weather App!
        </Typography>
        <Typography mb>
          A weather app is an application designed to provide users with
          up-to-date weather information for their current location or any
          location of their choice. The app typically uses data from weather
          forecasting services and displays information such as temperature,
          humidity, wind speed and direction, and precipitation chances. Weather
          apps often provide detailed forecasts for the next few days, as well
          as hourly breakdowns of upcoming weather conditions.
        </Typography>
        <Typography mb>
          Some weather apps also provide additional features, such as weather
          radar maps, severe weather alerts, and personalized notifications
          based on weather conditions. These features allow users to stay
          informed and make informed decisions about how to prepare for their
          day, whether it's dressing appropriately for the weather or adjusting
          their travel plans to avoid dangerous conditions.
        </Typography>
        <Typography>
          Weather apps can be used by a wide range of people, including
          commuters, travelers, outdoor enthusiasts, and anyone who wants to
          stay informed about the weather. With the rise of smartphones and
          mobile technology, weather apps have become increasingly popular,
          allowing users to access real-time weather information from anywhere,
          at any time.
        </Typography>
      </Container>
    </>
  );
};

export default Home;
