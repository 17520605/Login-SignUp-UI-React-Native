import axios from "axios";
import { API_ROOT } from "../utilities/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const apiService = axios.create({
  baseURL: API_ROOT,
  timeout: 5000,
});

apiService.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem("IMAtoken");
      if (token && config.headers) {
        config.headers["access_token"] = token;
        config.headers["Accept"] = "application/json";
        config.headers["Content-Type"] = "application/json";
      }
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => Promise.reject(error)
);

apiService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiService;
