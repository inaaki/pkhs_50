import qs from 'qs';
import ls from '../utils/localStorage';
import createToast from '../utils/toast';
import httpClient from './client';

async function signUp(data) {
  // `data` should be pure object === {}
  const ROUTE = '/signup';
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  const toast = createToast();
  try {
    const response = await httpClient.post(ROUTE, formData);
    toast.success('Account created', "We've successfully logged you in");
    const { user, token } = response.data.data;
    user.token = token;
    return Promise.resolve(user);
  } catch (err) {
    toast.error('Error occurred', "Account creation was unsuccessful");
    return Promise.reject(err);
  }
}

async function logOut(token) {
  const ROUTE = '/user/logout';
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    timeout: 5000,
  };
  return httpClient.post(ROUTE, {}, config);
}

async function login(data) {
  const toast = createToast();
  const ROUTE = '/signin';
  const query_URL = `${ROUTE}?${qs.stringify(data)}`;
  {
    try {
      const response = await httpClient.post(query_URL);
      const { token, user } = response?.data?.data;
      //set token globally
      if (token) {
        user.token = token;
        ls.set(token);
      } else {
        throw new Error('No token found');
      }
      toast.success('Login Successful', "We've successfully logged you in");

      return Promise.resolve(user);
    } catch (err) {
      const { status } = err.response;
      // 422 == no user found, 401 == wrong password
      if (status == '422') {
        toast.error('No user found', 'Create an account then try again !');
      } else if (status == '401') {
        toast.error('Wrong Password', 'Enter valid password and try again!');
      }

      return Promise.reject(err);
    }
  }
}

const http = {
  rejectHelper: httpClient.handleCancelReject,
  logOut,
  login,
  signUp,
};

export default http;
