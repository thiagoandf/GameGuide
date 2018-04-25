import { LOAD_GAME_LIST, REQUEST_GAME_LIST, LIKE_GAME, UPDATE_LIKED_GAMES } from './constants';

export const requestGameList = () => ({
  type: REQUEST_GAME_LIST,
});

export const loadGameList = (gameList) => ({
  type: LOAD_GAME_LIST,
  gameList,
});

export const likeGame = (gameId) => ({
  type: LIKE_GAME,
  gameId,
});

export const updateLikedGames = (gameId) => ({
  type: UPDATE_LIKED_GAMES,
  gameId,
});
