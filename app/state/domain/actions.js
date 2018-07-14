import { push } from 'react-router-redux';

import {
  LOAD_GAME_LIST,
  UPDATE_LIKED_GAMES,
  LOAD_RECOMMENDATIONS,
  LOAD_TOKEN,
  UPDATE_LOGIN_EMAIL,
  UPDATE_LOGIN_PASSWORD,
} from './constants';
import {
  selectPlayerToken,
  selectPlayerEmail,
  selectPlayerPassword,
} from './selectors';
import {
  postLikeGame,
  getGameList,
  getRecommendations,
  postLogin,
  postSignup,
} from '../../api/ackbar';

export const requestGameList = () => dispatch => {
  getGameList().then(gameList => {
    dispatch(loadGameList(gameList));
  });
};

const loadGameList = gameList => ({
  type: LOAD_GAME_LIST,
  gameList,
});

export const likeGame = gameId => (dispatch, getState) => {
  const token = selectPlayerToken(getState());
  postLikeGame(gameId, token).then(() => dispatch(updateLikedGames(gameId)));
};

const updateLikedGames = gameId => ({
  type: UPDATE_LIKED_GAMES,
  gameId,
});

export const requestRecommendations = () => (dispatch, getState) => {
  const token = selectPlayerToken(getState());
  getRecommendations(token).then(recommendations => {
    dispatch(loadRecommendations(recommendations));
  });
};

const loadRecommendations = recommendations => ({
  type: LOAD_RECOMMENDATIONS,
  recommendations,
});

export const tryLogin = (email, password) => dispatch => {
  postLogin(email, password).then(({ token }) => {
    dispatch(loadToken(token));
    dispatch(push('/recommendations'));
  });
};

const loadToken = token => ({
  type: LOAD_TOKEN,
  token,
});

export const trySignUp = () => (dispatch, getState) => {
  const state = getState();
  const email = selectPlayerEmail(state);
  const password = selectPlayerPassword(state);
  postSignup(email, password).then(({ token }) => {
    dispatch(loadToken(token));
    dispatch(push('/games'));
  });
};

export const updateLoginEmail = email => ({
  type: UPDATE_LOGIN_EMAIL,
  email,
});

export const updateLoginPassword = password => ({
  type: UPDATE_LOGIN_PASSWORD,
  password,
});
