import axios from "axios";

// Create a configured Axios instance
const axiosInstance = axios.create({
  baseURL: "https://intern-api.goqii.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🌐 Reusable GET and POST methods
const ApiServiceClient = {
  get: (url, params = {}) => axiosInstance.get(url, { params }),
  post: (url, data = {}) => axiosInstance.post(url, data),
};

export default ApiServiceClient;
