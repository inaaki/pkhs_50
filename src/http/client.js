import axios from 'axios';

// axios interceptors
axios.interceptors.response.use(
  response => response,

  //out of range 2xx fall below
  err => Promise.reject(err)
);

// default setting for axios
axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;

export default {
  post: axios.post,
};
