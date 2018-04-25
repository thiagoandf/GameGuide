import {
  REQUEST_GAME_LIST,
  LOAD_GAME_LIST,
  LIKE_GAME,
  UPDATE_LIKED_GAMES,
  REQUEST_RECOMMENDATIONS,
  LOAD_RECOMMENDATIONS,
} from './constants';

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

export const requestRecommendations = () => ({
  type: REQUEST_RECOMMENDATIONS,
});

export const loadRecommendations = (recommendations) => ({
  type: LOAD_RECOMMENDATIONS,
  recommendations,
});
