import { Container, Typography } from '@mui/material';

import video from '../../images/preview.mp4';

const Home = () => {
  return (
    <>
      <Container>
        <Typography variant="h2" component="h1" mb>
          Welcome to the Weather App!
        </Typography>
        <Typography variant="h4" component="h2" mb>
          About:
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
        <Typography mb>
          Weather apps can be used by a wide range of people, including
          commuters, travelers, outdoor enthusiasts, and anyone who wants to
          stay informed about the weather. With the rise of smartphones and
          mobile technology, weather apps have become increasingly popular,
          allowing users to access real-time weather information from anywhere,
          at any time.
        </Typography>
        <Typography variant="h4" component="h2" mb>
          How to use:
        </Typography>
        <Typography mb>
          It is very simple - just hit a menu button in left corner adn choose
          Weather.
        </Typography>
        <Typography mb>
          Enter a City name, it is required. State and Country are not required
          but could adjust search results. Very useful if you want to know
          weather in a small city with a famous name. Hit submit button and get
          results of maximum 5 most accurate places.
        </Typography>
        <Typography mb>
          Hit the <strong>Check Weather</strong> button near the city you are
          interested in. Now you see shield with short info and a map to figure
          out if you are enough lucky to choose the correct one.
        </Typography>
        <Typography mb>
          Hit the <strong>View Details</strong> button above the map and get
          redirected to page with detailed info. Its not quite stiled coz I am
          running out of ideas.
        </Typography>
        <Typography variant="h4" component="h2" mb>
          Possible extensions:
        </Typography>
        <Typography mb>
          You see 2 buttons <strong>Log In</strong> and <strong>Sign Up</strong>
          . They are not working, so whole functionality related to this buttons
          is about to be developed. But now it would take too much time to
          modify both React App and to create a Node/Express app. But if you
          read this, and feel very uncomfortable, I would be very happy about
          cooperating on finishing this app.
        </Typography>
        <Typography variant="h4" component="h2" mb>
          Demo:
        </Typography>
        <video width="100%" controls>
          <source src={video} type="video/mp4" />
        </video>
        <br />
      </Container>
    </>
  );
};

export default Home;
