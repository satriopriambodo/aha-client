import {
  GET_USER_DATA_FAILED,
  GET_USER_DATA_PENDING,
  GET_USER_DATA_SUCCESS,
} from "../types";

const initialState = {
  data: [],
  error: null,
  pending: false,
};

const userDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_DATA_PENDING:
      return { ...state, pending: payload };
    case GET_USER_DATA_SUCCESS:
      return { ...state, data: payload };
    case GET_USER_DATA_FAILED:
      return { ...state, error: payload };

    default:
      return state;
  }
};

export default userDataReducer;
