import { combineReducers } from "redux";
import userDataReducer from "./userData";

const rootReducer = combineReducers({
  userData: userDataReducer,
});

export default rootReducer;

// import { configureStore } from "@reduxjs/toolkit";
// import userDataReducer from "./userData";

// const store = configureStore({
//   reducer: { userData: userDataReducer },
// });

// export default store;
