import {
  GET_USER_DATA_FAILED,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_PENDING,
  GET_DETAIL_USER_PENDING,
  GET_DETAIL_USER_SUCCESS,
  GET_DETAIL_USER_FAILED,
} from "../types";

import axios from "axios";

const getUserData = (payload) => {
  return { type: GET_USER_DATA_SUCCESS, payload };
};

const getUserDataFailed = (payload) => {
  return { type: GET_USER_DATA_FAILED, payload };
};

const getUserDataPending = (payload) => {
  return { type: GET_USER_DATA_PENDING, payload };
};

const getUserDetailData = (payload) => {
  return { type: GET_DETAIL_USER_SUCCESS, payload };
};

export const fetchUserData = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_DATA_PENDING,
      payload: null,
    });
    const { data: users } = await axios.get(
      `https://aha-satrio.herokuapp.com/users`,
      {
        headers: { access_token: localStorage.access_token },
      }
    );

    console.log(users, "res action<<<<<<<<<<<<<<");
    dispatch(getUserData(users));

    return users;
  } catch (error) {
    dispatch({
      type: GET_USER_DATA_FAILED,
      payload: error.message,
    });
  }
};

const setDetailUser = (payload) => {
  return { type: GET_DETAIL_USER_SUCCESS, payload };
};

const setDetailPending = (payload) => {
  return { type: GET_DETAIL_USER_PENDING, payload };
};

const setDetailError = (payload) => {
  return { type: GET_DETAIL_USER_FAILED, payload };
};
// export const getDetailUser = (id) => {
//   return async (dispatch) => {
//     try {
//       dispatch(setDetailPending(true));
//       dispatch(setDetailError(null));
//       const { data: user } = await axios.get(
//         `https://aha-satrio.herokuapp.com/users/${id}`,
//         {
//           headers: { access_token: localStorage.access_token },
//         }
//       );
//       console.log(user, "detail user  action<<<<<<<<<<<<<<");
//       dispatch(setDetailUser(user));
//       return user;
//     } catch (error) {
//       dispatch(setDetailError(error.message));
//     } finally {
//       dispatch(setDetailPending(false));
//     }
//   };
// };

export const getDetailUser = (id) => async (dispatch) => {
  //#2
  try {
    dispatch({
      type: GET_DETAIL_USER_PENDING,
      payload: null,
    });
    const { data: users } = await axios.get(
      `https://aha-satrio.herokuapp.com/users/${id}`,
      {
        headers: { access_token: localStorage.access_token },
      }
    );

    console.log(users, "res action<<<<<<<<<<<<<<");
    dispatch(getUserDetailData(users));

    return users;
  } catch (error) {
    dispatch({
      type: GET_DETAIL_USER_FAILED,
      payload: error.message,
    });
  }
};

export const updateUser = (id, userdata) => {
  return async (dispatch, getState) => {
    console.log("masuk");
    try {
      const { data } = await axios.put(
        `https://aha-satrio.herokuapp.com/users/update_profile/${id}`,
        userdata,
        {
          headers: { access_token: localStorage.access_token },
        }
      );

      return data;
    } catch (error) {
      dispatch(setDetailError(error));
      throw new Error(error.response.data.message);
    }
  };
};
