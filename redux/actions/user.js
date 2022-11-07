import {
  GET_USER_DATA_FAILED,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_PENDING,
} from "../types";
// import axios from "../../utils/axios";
import axios from "axios";
// import { useRouter } from "next/router";

// const router = useRouter();

const getUserData = (payload) => {
  return { type: GET_USER_DATA_SUCCESS, payload };
};

const getUserDataFailed = (payload) => {
  return { type: GET_USER_DATA_FAILED, payload };
};

const getUserDataPending = (payload) => {
  return { type: GET_USER_DATA_PENDING, payload };
};

export const fetchUserData = () => async (dispatch) => {
  try {
    // if (!localStorage.getItem("access_token")) {
    //   router.push("/login");
    // }
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

export const fetchUserDataById = (id) => {
  return async (dispatch) => {
    dispatch(getUserDataPending(true));
    dispatch(getUserDataFailed(null));
    try {
      const { data: user } = await axios.get(
        `https://aha-satrio.herokuapp.com/users/${id}`
      );

      dispatch(getUserData(user));
      return user;
    } catch (error) {
      dispatch(getUserDataFailed(error.message));
    } finally {
      dispatch(getUserDataPending(false));
    }
  };
};

export const updateUser = (id, formData) => {
  return async (dispatch) => {
    dispatch(getUserDataPending(true));
    dispatch(getUserDataFailed(null));
    try {
      const { data: user } = await axios.put(
        `/users/update_profile/${id}`,
        formData
      );

      dispatch(fetchUserData());
      return user;
    } catch (error) {
      dispatch(getUserDataFailed(error.message));
    } finally {
      dispatch(getUserDataPending(false));
    }
  };
};
