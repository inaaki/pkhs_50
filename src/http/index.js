import httpClient from './client';

async function signUp(data) {
  const ROUTE = '/signup';
  return httpClient.post(ROUTE, data);
}

async function logOut(token) {
  const ROUTE = '/user/logout';
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    //TODO: create a global toaster for timeout
    timeout: 5000,
  };
  return httpClient.post(ROUTE, {}, config);
}

const http = {
  signUp,
  logOut,
  rejectHelper: httpClient.handleCancelReject,
};

export default http;
