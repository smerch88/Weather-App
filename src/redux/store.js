import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { citiesReducer } from './weather/weather-slice';

const persistConfig = {
  key: 'cities',
  whitelist: ['cities', 'cityWeather'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, citiesReducer);

export const store = configureStore({
  reducer: { cities: persistedReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
