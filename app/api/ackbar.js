import request from 'utils/request';

const ackbarUrl = process.env.ACKBAR_URL;

export const getGameList = () =>
  request(`${ackbarUrl}/api/Games`, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });

export const postLikeGame = () =>
  Promise.resolve();

export const getRecommendations = () =>
  Promise.resolve([4, 5]);

export const postLogin = () =>
  Promise.resolve({ token: 'jrrtolkien' });

export const postSignup = () =>
  Promise.resolve({ token: 'jrrtolkien' });
