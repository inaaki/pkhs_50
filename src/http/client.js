import axios from 'axios';

// default setting for axios
axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;

export default {
  post: axios.post,
};
