import axios from "axios";

export default {
  post(url, data) {
    return axios.post(url, data, {
      headers: { "Content-Type": "application/json" }
    });
  },
  get(url, data) {
    return axios.get(url, data);
  },
  getCommon(url, data = "") {
    let URL = process.server ? `http://server:3001/${url}` : `/api/${url}`;
    console.log(URL);
    return axios.get(URL, data);
  }
};
