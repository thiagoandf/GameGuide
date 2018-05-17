import request from '../utils/request';

const ackbarUrl = process.env.ACKBAR_URL;
const requestAckbar = (path, method, payload) => {
  const fetchOptions = {
    method,
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${(payload && payload.token) || ''}`,
    }),
  };

  if (method === 'GET') {
    return request(`${ackbarUrl}/${path}`, fetchOptions);
  }
  return request(`${ackbarUrl}/${path}`, {
    ...fetchOptions,
    body: JSON.stringify(payload || {}),
  });
};

export const getGameList = () =>
  requestAckbar('api/Games', 'GET');

export const postLikeGame = (gameId, token) =>
  requestAckbar(`api/Player/LikeGame/${gameId}`, 'POST', { token });

export const getRecommendations = () =>
  Promise.resolve([4, 5]);


export const postLogin = (email, password) =>
  requestAckbar('api/User/Login', 'POST', { email, password });

export const postSignup = (email, password) =>
  requestAckbar('api/User/Signup', 'POST', { email, password });
