// store.js
import { createStore, combineReducers } from "redux";
import { serviceReducer } from "./reducer";

const rootReducer = combineReducers({
  helpers: serviceReducer,
  // ... other reducers if any
});

const store = createStore(rootReducer);

export default store;
