import { call, put, delay, takeLatest } from "redux-saga/effects";
import { fetchWeather, fetchWeatherError, fetchWeatherSuccess } from "./weatherPageSlice";
import { getApi } from "./getApi";
import { API_KEY, API_URL } from "./apiData";

function* fetchWeatherHandler({ payload: { query } }) {
  const api = `${API_URL}${query}&appid=${API_KEY}&units=metric`;

  try {
    yield delay(1000);
    const weatherInfo = yield call(getApi, api);
    yield put(fetchWeatherSuccess(weatherInfo));
  }
  catch (error) {
    yield put(fetchWeatherError());
    console.error(error);
  }
};

function* weatherSaga() {
  yield takeLatest(fetchWeather.type, fetchWeatherHandler);
};

export default weatherSaga;