import axios from "axios";
import Cookies from "js-cookie";

const axiosInterceptors = axios.create({
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
});

axiosInterceptors.interceptors.request.use(
  (config) => {
    config.headers = {
      access_token: localStorage.getItem("access_token"),
    };
    console.log(config, "config intercept..............");
    return config;
  },
  (error) => {
    console.log(error, "oooooo");
    return Promise.reject(error);
  }
);

axiosInterceptors.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error, "aaaaa");
    if (error.response.code === 404) {
      Cookies.remove("access_token");
      localStorage.clear();
      if (Cookies.get("access_token")) {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInterceptors;
