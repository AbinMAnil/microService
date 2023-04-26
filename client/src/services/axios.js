import axios from "axios";

const Axios = axios.create({
  withCredentials: true,
  baseURL: "http://read/api/v1",
});

export default Axios;