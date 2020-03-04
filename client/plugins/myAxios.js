import axios from "axios";

export default {
  post(url, data) {
    return axios.post(url, data, {
      headers: { "Content-Type": "application/json" }
    });
  },
  get(url, data) {
    return axios.get(url, data);
  }
};
