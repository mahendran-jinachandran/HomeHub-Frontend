import axios from "axios";
import { authTokenService } from "../service/AuthTokenService";


const apiClient = axios.create({
  baseURL: "http://localhost:8080"
})

apiClient.interceptors.request.use((config) => {

  const token = authTokenService.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


export default apiClient