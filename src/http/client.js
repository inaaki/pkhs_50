import axios from 'axios';
import createToast from '../utils/toast';

// axios interceptors
axios.interceptors.response.use(
  response => response,

  //out of range 2xx fall below
  err => {
    const toast = createToast();
    if (err.code === 'ERR_NETWORK') {
      toast.networkError();
      throw new axios.Cancel('Network Error');
    } else if (err.code === 'ECONNABORTED') {
      toast.timeoutError();
      throw new axios.Cancel('Timeout Error');
    }
    return Promise.reject(err);
  }
);

// default setting for axios
axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;

function handleCancelReject(err, cb) {
  if (err.code !== 'ERR_CANCELED') cb?.();
}

const client = {
  post: axios.post,
  handleCancelReject,
};

export default client;
