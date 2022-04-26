import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weather: [],
    loading: false,
    error: false
  },
  reducers: {
    fetchWeather: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchWeatherSuccess: (state, { payload: weatherInfo }) => {
      state.weather = weatherInfo;
      state.loading = false;
    },
    fetchWeatherError: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const {
  fetchWeather,
  fetchWeatherSuccess,
  fetchWeatherError,
} = weatherSlice.actions;

const selectWeatherState = state => state.weather;

export const selectWeather = state => selectWeatherState(state).weather;
export const selectLoading = state => selectWeatherState(state).loading;
export const selectError = state => selectWeatherState(state).error;

export default weatherSlice.reducer;