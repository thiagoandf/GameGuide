export const getGameList = () =>
  Promise.resolve([
    {
      id: 1,
      name: 'Tokaido',
    },
    {
      id: 2,
      name: '7 Wonders',
    },
    {
      id: 3,
      name: 'Takenoko',
    },
    {
      id: 4,
      name: '7 Wonders Duel',
    },
    {
      id: 5,
      name: 'Hanabi',
    },
  ]);

export const postLikeGame = () =>
  Promise.resolve();

export const getRecommendations = () =>
  Promise.resolve([4, 5]);

export const postLogin = () =>
  Promise.resolve({ token: 'jrrtolkien' });
