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

export const getGameList = () => requestAckbar('api/Games', 'GET');

export const postPlayerSignup = (
  email,
  password,
  avatarUrl,
  collectionSize,
  weeklyPlayTime,
) =>
  requestAckbar('api/Player/Signup', 'POST', {
    email,
    password,
    avatarUrl,
    collectionSize,
    weeklyPlayTime,
  });

export const postViewGame = (gameId, token) =>
  requestAckbar(`api/Player/ViewGame/${gameId}`, 'POST', { token });

export const postLikeGame = (gameId, token) =>
  requestAckbar(`api/Player/LikeGame/${gameId}`, 'POST', { token });

export const postOwnGame = (gameId, token) =>
  requestAckbar(`api/Player/OwnGame/${gameId}`, 'POST', { token });

export const getPlayerInfo = token =>
  requestAckbar(`api/Player/Info`, 'GET', { token });

export const getRecommendations = token =>
  requestAckbar('api/Player/Recommendations', 'GET', { token });

export const postLogin = (email, password) =>
  requestAckbar('api/User/Login', 'POST', { email, password });

export const getReportUrls = token =>
  requestAckbar('api/Customer/GetReportUrl', 'GET', { token });

// deprecated
export const postSignup = (email, password) =>
  requestAckbar('api/User/Signup', 'POST', { email, password });

export default {
  getGameList,
  postPlayerSignup,
  postViewGame,
  postLikeGame,
  postOwnGame,
  getPlayerInfo,
  getRecommendations,
  postLogin,
  getReportUrls,
  postSignup,
};
