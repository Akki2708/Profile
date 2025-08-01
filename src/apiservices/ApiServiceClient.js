// src/api/ApiServiceClient.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://intern-api.goqii.com",
  timeout: 10000,
});

const ApiServiceClient = {
  get: (url, params) => axiosInstance.get(url, { params }),
  post: (url, data) => axiosInstance.post(url, data),
};

export default ApiServiceClient;
