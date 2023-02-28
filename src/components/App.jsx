import { lazy } from 'react';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';

const WeatherPage = lazy(() => import('../pages/Weather/Weather'));
const HomePage = lazy(() => import('../pages/Home/Home'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="*" element={<WeatherPage />} />
        </Route>
      </Routes>
    </>
  );
};
