import axios from "axios";
import { getActivityError, getActivitySuccess } from "actions/scenicSpot";
import {
  GET_ACTIVITY,
  GET_ACTIVITY_SUCCESS,
  GET_ACTIVITY_ERROR,
} from "constant";
import { take, call, put, fork, cancel } from "redux-saga/effects";

function* sendRequest(action) {
  const { $top } = action.payload;
  try {
    const response = yield call(axios, {
      method: "GET",
      url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity`,
      params: {
        $top,
        $format: "JSON",
      },
    });
    yield put(getActivitySuccess(response.data));
  } catch (e) {
    yield put(getActivityError(e));
  }
}

function* getActivity() {
  while (true) {
    const action = yield take(GET_ACTIVITY);
    const task = yield fork(sendRequest, action);
    yield take([GET_ACTIVITY_SUCCESS, GET_ACTIVITY_ERROR]);
    yield cancel(task);
  }
}

export default getActivity;
