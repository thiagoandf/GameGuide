import { call, put } from 'redux-saga/effects';
import { postLikeGame, getGameList, getRecommendations } from 'api/ackbar';
import { updateLikedGames, loadGameList, loadRecommendations } from './actions';

export function* likeGame(action) {
  try {
    yield call(postLikeGame);
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
    const recommendations = yield call(getRecommendations);
    yield put(loadRecommendations(recommendations));
  } catch (err) {
    console.log(err); // eslint-disable-line
  }
}
