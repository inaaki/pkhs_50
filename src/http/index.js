import qs from 'qs';
import ls from '../utils/localStorage';
import createToast from '../utils/toast';
import tokenGenerator from '../utils/tokenGenerator';
import httpClient from './client';

async function signUp(data) {
  const ROUTE = '/signup';
  return httpClient.post(ROUTE, data);
}

async function logOut(token) {
  const ROUTE = '/user/logout';
  const config = {
    headers: {
      Authorization: tokenGenerator(token),
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

//fetch user data
async function getUser(token) {
  const toast = createToast();
  const ROUTE = '/user/profile';
  const config = {
    headers: {
      Authorization: tokenGenerator(token),
    },
    timeout: 10000,
  };
  try {
    const response = await httpClient.get(ROUTE, config);
    const user = response.data.data;
    return Promise.resolve(user);
  } catch (err) {
    const { response } = err;
    if (response.status == '401') {
      toast.notify('Please, try to login again :)');
    }
    return Promise.reject(err);
  }
}

const http = {
  getUser,
  logOut,
  login,
  rejectHelper: httpClient.handleCancelReject,
  signUp,
};

export default http;
