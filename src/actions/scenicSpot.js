import {
  GET_SCENIC_SPOT,
  GET_SCENIC_SPOT_ERROR,
  GET_SCENIC_SPOT_SUCCESS,
  GET_ACTIVITY,
  GET_ACTIVITY_ERROR,
  GET_ACTIVITY_SUCCESS,
} from "constant";

export function getScenicSpot(data) {
  return {
    type: GET_SCENIC_SPOT,
    payload: { data },
  };
}

export function getScenicSpotSuccess(data) {
  return {
    type: GET_SCENIC_SPOT_SUCCESS,
    payload: data,
  };
}

export function getScenicSpotError(errors) {
  return {
    type: GET_SCENIC_SPOT_ERROR,
    payload: {
      errors: errors,
    },
  };
}

export function getActivity(data) {
  return {
    type: GET_ACTIVITY,
    payload: data,
  };
}

export function getActivitySuccess(data) {
  return {
    type: GET_ACTIVITY_SUCCESS,
    payload: data,
  };
}

export function getActivityError(errors) {
  return {
    type: GET_ACTIVITY_ERROR,
    payload: {
      errors: errors,
    },
  };
}
