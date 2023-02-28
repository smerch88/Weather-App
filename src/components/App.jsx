import { lazy } from 'react';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';

const WeatherPage = lazy(() => import('../pages/Weather/Weather'));
const HomePage = lazy(() => import('../pages/Home/Home'));
const WeatherDetailsPage = lazy(() =>
  import('../pages/WeatherDetails/WeatherDetails')
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route
            path="/weather/:cityName/details"
            element={<WeatherDetailsPage />}
          />
          <Route path="*" element={<WeatherPage />} />
        </Route>
      </Routes>
    </>
  );
};