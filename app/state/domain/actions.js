import {
  REQUEST_GAME_LIST,
  LOAD_GAME_LIST,
  LIKE_GAME,
  UPDATE_LIKED_GAMES,
  REQUEST_RECOMMENDATIONS,
  LOAD_RECOMMENDATIONS,
  TRY_LOGIN,
  LOAD_TOKEN,
  UPDATE_LOGIN_EMAIL,
  UPDATE_LOGIN_PASSWORD,
  TRY_SIGNUP,
} from './constants';

export const requestGameList = () => ({
  type: REQUEST_GAME_LIST,
});

export const loadGameList = gameList => ({
  type: LOAD_GAME_LIST,
  gameList,
});

export const likeGame = gameId => ({
  type: LIKE_GAME,
  gameId,
});

export const updateLikedGames = gameId => ({
  type: UPDATE_LIKED_GAMES,
  gameId,
});

export const requestRecommendations = () => ({
  type: REQUEST_RECOMMENDATIONS,
});

export const loadRecommendations = recommendations => ({
  type: LOAD_RECOMMENDATIONS,
  recommendations,
});

export const tryLogin = (email, password) => ({
  type: TRY_LOGIN,
  email,
  password,
});

export const loadToken = token => ({
  type: LOAD_TOKEN,
  token,
});

export const trySignUp = () => ({
  type: TRY_SIGNUP,
});

export const updateLoginEmail = email => ({
  type: UPDATE_LOGIN_EMAIL,
  email,
});

export const updateLoginPassword = password => ({
  type: UPDATE_LOGIN_PASSWORD,
  password,
});
