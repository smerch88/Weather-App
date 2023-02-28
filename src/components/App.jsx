import { lazy } from 'react';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { theme } from 'styles/theme';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const WeatherPage = lazy(() => import('../pages/Weather/Weather'));
const HomePage = lazy(() => import('../pages/Home/Home'));
const WeatherDetailsPage = lazy(() =>
  import('../pages/WeatherDetails/WeatherDetails')
);

export const App = () => {
  return (
    <>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <CssBaseline />
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
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
};
