import { fork } from "redux-saga/effects";

import getScenicSpot from "./scenicSpot/getScenicSpot";
import getActivity from "./scenicSpot/getActivity";

export default function* rootSaga() {
  yield fork(getScenicSpot);
  yield fork(getActivity);
}
