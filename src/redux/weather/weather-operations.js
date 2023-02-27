import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import { getCityCoordinates, getCordinatesWeather } from 'services/api';

export const fetchGetCityCoordinates = createAsyncThunk(
  'weather/getCityCoordinates',
  async (cityName, thunkApi) => {
    try {
      const res = await getCityCoordinates(cityName);
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
      Notify.success('OK');
      return res;
    } catch (error) {
      Notify.failure(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
