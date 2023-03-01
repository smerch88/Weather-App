import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import { getCityCoordinates, getCordinatesWeather } from 'services/api';

export const fetchGetCityCoordinates = createAsyncThunk(
  'weather/getCityCoordinates',
  async (cityName, thunkApi) => {
    try {
      const res = await getCityCoordinates(cityName);
      if (res.code === 'ERR_BAD_REQUEST') {
        throw new Error(
          `Failed to fetch weather data, status code: ${res.response.data.message}`
        );
      }
      Notify.success('OK');
      return res;
    } catch (error) {
      Notify.failure(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchGetCordinatesWeather = createAsyncThunk(
  'weather/getCityWeather',
  async (coordinates, thunkApi) => {
    try {
      const res = await getCordinatesWeather(coordinates);
      if (res.code === 'ERR_BAD_REQUEST') {
        throw new Error(
          `Failed to fetch weather data, status code: ${res.response.data.message}`
        );
      }
      Notify.success('OK');
      return res;
    } catch (error) {
      Notify.failure(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
