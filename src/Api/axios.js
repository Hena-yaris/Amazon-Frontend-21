import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-79cf0/us-central1/api",
  baseURL: "https://amazon-api-deploy21-updated.onrender.com/",
});

export { axiosInstance };
