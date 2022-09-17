import http from './client';

async function signUp(data) {
  const ROUTE = '/signup';
  return http.post(ROUTE, data);
}

export default {
  signUp,
};
