import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import scenicSpot from "./scenicSpot";

const rootReducer = combineReducers({
  router: routerReducer,
  scenicSpot,
});

export default rootReducer;
