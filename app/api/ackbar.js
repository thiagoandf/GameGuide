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
  ]);

export const postLikeGame = () =>
  Promise.resolve();
