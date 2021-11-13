import {
  GET_SCENIC_SPOT,
  GET_SCENIC_SPOT_ERROR,
  GET_SCENIC_SPOT_SUCCESS,
  GET_ACTIVITY,
  GET_ACTIVITY_ERROR,
  GET_ACTIVITY_SUCCESS,
  GET_RESTAURANT,
  GET_RESTAURANT_ERROR,
  GET_RESTAURANT_SUCCESS,
} from "constant";

const initState = {
  errors: null,
  list: [],
  activityList: [],
  restaurantList: [],
  isPending: false,
};

export default function (state = initState, action) {
  switch (action.type) {
    case GET_SCENIC_SPOT:
      return { ...state, errors: null, isPending: true };
    case GET_SCENIC_SPOT_SUCCESS:
      return {
        ...state,
        errors: null,
        isPending: false,
        list: action.payload,
      };
    case GET_SCENIC_SPOT_ERROR:
      return {
        ...state,
        errors: action.payload.errors,
      };
    case GET_ACTIVITY:
      return { ...state, errors: null, isPending: true };
    case GET_ACTIVITY_SUCCESS:
      return {
        ...state,
        errors: null,
        isPending: false,
        activityList: action.payload,
      };
    case GET_ACTIVITY_ERROR:
      return {
        ...state,
        errors: action.payload.errors,
      };
    case GET_RESTAURANT:
      return { ...state, errors: null, isPending: true };
    case GET_RESTAURANT_SUCCESS:
      return {
        ...state,
        errors: null,
        isPending: false,
        restaurantList: action.payload,
      };
    case GET_RESTAURANT_ERROR:
      return {
        ...state,
        errors: action.payload.errors,
      };
    default:
      return state;
  }
}

function updateVote(answerArr, id, value) {
  return answerArr.map((answer) => {
    if (answer.id !== id) return answer;
    const newAnswer = { ...answer };
    newAnswer.vote =
      Number(newAnswer.vote) + value - (newAnswer.voteValue || 0);
    newAnswer.voteValue = value;
    return newAnswer;
  });
}
