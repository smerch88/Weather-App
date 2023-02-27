import { createSlice } from '@reduxjs/toolkit';
import {
  fetchGetCityCoordinates,
  fetchGetCordinatesWeather,
} from './weather-operations';

const initialState = {
  cities: [],
  cityWeather: [],
  isLoadingCities: false,
  isLoadingWeather: false,
  isLoading: false,
  error: null,
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchGetCityCoordinates.pending, state => {
        state.isLoadingCities = true;
      })
      .addCase(fetchGetCityCoordinates.fulfilled, (state, action) => {
        state.isLoadingCities = false;
        state.error = null;
        state.cities = action.payload;
      })
      .addCase(fetchGetCityCoordinates.rejected, (state, action) => {
        state.isLoadingCities = false;
        state.error = action.payload;
      })
      .addCase(fetchGetCordinatesWeather.pending, state => {
        state.isLoadingWeather = true;
      })
      .addCase(fetchGetCordinatesWeather.fulfilled, (state, action) => {
        state.isLoadingWeather = false;
        state.error = null;
        state.cityWeather = action.payload;
      })
      .addCase(fetchGetCordinatesWeather.rejected, (state, action) => {
        state.isLoadingWeather = false;
        state.error = action.payload;
      });
  },
});

export const citiesReducer = citiesSlice.reducer;
