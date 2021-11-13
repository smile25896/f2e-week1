import axios from "axios";
import { getRestaurantError, getRestaurantSuccess } from "actions/scenicSpot";
import {
  GET_RESTAURANT,
  GET_RESTAURANT_SUCCESS,
  GET_RESTAURANT_ERROR,
} from "constant";
import { take, call, put, fork, cancel } from "redux-saga/effects";
import jsSHA from "jssha";

function* sendRequest(action) {
  const { $top } = action.payload;
  try {
    const response = yield call(axios, {
      method: "GET",
      url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant`,
      params: {
        $top,
        $format: "JSON",
      },
      headers: getAuthorizationHeader(),
    });
    yield put(getRestaurantSuccess(response.data));
  } catch (e) {
    yield put(getRestaurantError(e));
  }
}

function* getRestaurant() {
  while (true) {
    const action = yield take(GET_RESTAURANT);
    const task = yield fork(sendRequest, action);
    yield take([GET_RESTAURANT_SUCCESS, GET_RESTAURANT_ERROR]);
    yield cancel(task);
  }
}

function getAuthorizationHeader() {
  //  填入自己 ID、KEY 開始
  let AppID = "13db8d27f7134907952a3cf907a8def5";
  let AppKey = "P2t0iSweS1JgRiONO220kn4wdGg";
  //  填入自己 ID、KEY 結束
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return { Authorization: Authorization, "X-Date": GMTString };
}

export default getRestaurant;
