import { call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import {
  postLikeGame,
  getGameList,
  getRecommendations,
  postLogin,
  postSignup,
} from '../../api/ackbar';

import {
  updateLikedGames,
  loadGameList,
  loadRecommendations,
  loadToken,
} from './actions';

import {
  selectPlayerEmail,
  selectPlayerPassword,
  selectPlayerToken,
} from './selectors';

export function* likeGame(action) {
  try {
    const token = yield select(selectPlayerToken);
    yield call(postLikeGame, action.gameId, token);
    yield put(updateLikedGames(action.gameId));
  } catch (err) {
    console.log(err); // eslint-disable-line
  }
}

export function* requestGameList() {
  try {
    const gameList = yield call(getGameList);
    yield put(loadGameList(gameList));
  } catch (err) {
    console.log(err); // eslint-disable-line
  }
}

export function* requestRecommendations() {
  try {
    const token = yield select(selectPlayerToken);
    const recommendations = yield call(getRecommendations, token);
    yield put(loadRecommendations(recommendations));
  } catch (err) {
    console.log(err); // eslint-disable-line
  }
}

export function* tryLogin(action) {
  try {
    const { token } = yield call(postLogin, action.email, action.password);
    yield put(loadToken(token));
    yield put(push('/recommendations'));
  } catch (err) {
    console.log(err); // eslint-disable-line
  }
}

export function* trySignUp() {
  try {
    const email = yield select(selectPlayerEmail);
    const password = yield select(selectPlayerPassword);
    const { token } = yield call(postSignup, email, password);
    yield put(loadToken(token));
    yield put(push('/games'));
  } catch (err) {
    console.log(err); // eslint-disable-line
  }
}
