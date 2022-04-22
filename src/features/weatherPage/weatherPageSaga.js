import { call, put, delay, takeLatest } from "redux-saga/effects";
import { fetchWeather, fetchWeatherSuccess } from "./weatherPageSlice";
import { getApi } from "./getApi";
import { API_KEY } from "./apiUrl";

function* fetchWeatherHandler({ payload: { query } }) {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`;

  try {
    yield delay(1000);
    const weatherInfo = yield call(getApi, api);
    yield put(fetchWeatherSuccess(weatherInfo));
  }
  catch (error) {
    console.error(error);
  }
};

function* weatherSaga() {
  yield takeLatest(fetchWeather.type, fetchWeatherHandler);
};

export default weatherSaga;