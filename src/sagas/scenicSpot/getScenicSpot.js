import axios from "axios";
import { getScenicSpotError, getScenicSpotSuccess } from "actions/scenicSpot";
import {
  GET_SCENIC_SPOT,
  GET_SCENIC_SPOT_SUCCESS,
  GET_SCENIC_SPOT_ERROR,
} from "constant";
import { take, call, put, fork, cancel } from "redux-saga/effects";

function* sendRequest(action) {
  const { $top } = action.payload;
  try {
    const response = yield call(axios, {
      method: "GET",
      url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot`,
      params: {
        $top,
        $format: "JSON",
      },
    });
    yield put(getScenicSpotSuccess(response.data));
  } catch (e) {
    yield put(getScenicSpotError(e));
  }
}

function* getScenicSpot() {
  while (true) {
    const action = yield take(GET_SCENIC_SPOT);
    const task = yield fork(sendRequest, action);
    yield take([GET_SCENIC_SPOT_SUCCESS, GET_SCENIC_SPOT_ERROR]);
    yield cancel(task);
  }
}

export default getScenicSpot;
