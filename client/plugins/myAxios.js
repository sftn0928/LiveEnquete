import axios from "axios";

export default {
  post(url, data) {
    axios.post(url, data, {
      headers: { "Content-Type": "application/json" }
    });
  },
  get(url, data) {
    axios.get(url, data);
  }
};
