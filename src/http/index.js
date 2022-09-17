import http from './client';

async function signUp(data) {
  const ROUTE = '/signup';

  return http
    .post(ROUTE, data)
    .then(data => data)
    .catch(e => e);
}

export default {
  signUp,
};
