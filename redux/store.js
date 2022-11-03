import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  // console.log("next state", store.getState());
  return result;
};

const middleware = [thunk];
const initalState = {};

// export const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// export const store = createStore(
//   rootReducer
// );

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
