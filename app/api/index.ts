import axios from "axios";
import { useMutation } from "react-query";
import { API_ROUTES } from "./routes";
import { T_LOGIN_API_BODY } from "./types";

const axiosClient = axios.create({
  baseURL: ``, // Replace with your base url here
  timeout: 10000,
  timeoutErrorMessage: `Request is timeout`,
});

// Interceptors
// Mostly used for API token refresh
axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Here you can write apis
const useLoginAPI = () => {
  return useMutation({
    mutationKey: [API_ROUTES.LOGIN],
    mutationFn: async (body: T_LOGIN_API_BODY) => {
      const response = await axiosClient({
        method: "POST",
        url: API_ROUTES.LOGIN,
        data: body,
      });
      return response.data;
    },
  });
};

export { useLoginAPI };
