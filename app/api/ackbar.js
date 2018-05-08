import request from 'utils/request';

// export const getGameList = () =>
//   Promise.resolve([
//     {
//       id: 1,
//       name: 'Tokaido',
//     },
//     {
//       id: 2,
//       name: '7 Wonders',
//     },
//     {
//       id: 3,
//       name: 'Takenoko',
//     },
//     {
//       id: 4,
//       name: '7 Wonders Duel',
//     },
//     {
//       id: 5,
//       name: 'Hanabi',
//     },
//   ]);

const ackbarUrl = process.env.ackbarUrl;

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
