import axios from "axios";

class BaseService {
  baseUrl = process.env.REACT_APP_API_URL;
  axios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { "content-type": "appliaction/js" },
  });
}

export default BaseService;
