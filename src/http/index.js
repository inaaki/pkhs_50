import http from './client';

async function signUp(data) {
  const ROUTE = '/signup';
  return http.post(ROUTE, data);
}

async function logOut(token) {
  const ROUTE = '/user/logout';
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    timeout: 5000,
  };
  return http.post(ROUTE, {}, config);
}

export default {
  signUp,
  logOut,
};
