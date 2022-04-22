import { all } from "redux-saga/effects";
import weatherSaga from "./features/weatherPage/weatherPageSaga";

export default function* rootSaga() {
  yield all([
    weatherSaga(),
  ]);
};