import { combineReducers } from "redux";

import counterReducer from "./counter/counter.reducer";

const reducers = combineReducers({
  counter: counterReducer,
});

export default reducers;
