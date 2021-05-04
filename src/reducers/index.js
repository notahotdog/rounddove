import { combineReducers } from "redux";
import feedbackReducer from "./feedbackReducer";
// import
// import testReducer from "./testReducer";

const allReducers = combineReducers({
  feedback: feedbackReducer,
  // testReducer: testReducer,
});
export default allReducers;
