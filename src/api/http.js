import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5504/api",
  timeout: 3000,
});

export default {
  get: instance.get,
  post: instance.post,
};
