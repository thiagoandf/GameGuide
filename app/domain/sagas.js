import { call, put } from 'redux-saga/effects';
import { postLikeGame, getGameList } from 'api/ackbar';
import { updateLikedGames, loadGameList } from './actions';

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
