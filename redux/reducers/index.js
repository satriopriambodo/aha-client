import { combineReducers } from "redux";
import userDataReducer from "./userData";
import userDetailReducer from "./userDetail";

const rootReducer = combineReducers({
  userData: userDataReducer,
  userDetail: userDetailReducer,
});

export default rootReducer;

// import { configureStore } from "@reduxjs/toolkit";
// import userDataReducer from "./userData";

// const store = configureStore({
//   reducer: { userData: userDataReducer },
// });

// export default store;
