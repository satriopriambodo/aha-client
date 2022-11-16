import {
  GET_DETAIL_USER_PENDING,
  GET_DETAIL_USER_SUCCESS,
  GET_DETAIL_USER_FAILED,
} from "../types";

const initialState = {
  data: [],
  error: null,
  pending: false,
};

const userDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DETAIL_USER_PENDING:
      return { ...state, pending: payload };
    case GET_DETAIL_USER_SUCCESS:
      return { ...state, data: payload };
    case GET_DETAIL_USER_FAILED:
      return { ...state, error: payload };

    default:
      return state;
  }
};

export default userDetailReducer;
