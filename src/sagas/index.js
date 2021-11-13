import { fork } from "redux-saga/effects";

import getScenicSpot from "./scenicSpot/getScenicSpot";
import getActivity from "./scenicSpot/getActivity";
import getRestaurant from "./scenicSpot/getRestaurant";

export default function* rootSaga() {
  yield fork(getScenicSpot);
  yield fork(getActivity);
  yield fork(getRestaurant);
}
