import { lazy } from 'react';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';

const WeatherPage = lazy(() => import('../pages/Weather/Weather'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WeatherPage />} />
          <Route path="*" element={<WeatherPage />} />
        </Route>
      </Routes>
    </>
  );
};
