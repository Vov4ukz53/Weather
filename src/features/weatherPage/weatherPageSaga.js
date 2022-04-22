import { call, put, delay, takeLatest } from "redux-saga/effects";
import { fetchWeather, fetchWeatherSuccess } from "./weatherPageSlice";
import { getApi } from "./getApi"

function* fetchWeatherHandler() {
  const api = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=7758f89a16e34740af97b700ee003421';
  
  try {
    yield delay(1000);
    const weatherInfo = yield call(getApi, api);
    yield console.log(weatherInfo);
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