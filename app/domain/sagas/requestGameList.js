import { takeLatest, call, put } from 'redux-saga/effects';
import { getGameList } from 'api/ackbar';
import { REQUEST_GAME_LIST } from '../constants';
import { loadGameList } from '../actions';

export function* requestGameList() {
  try {
    const gameList = yield call(getGameList);
    console.log(gameList);
    yield put(loadGameList, gameList);
  } catch (err) {
    console.log(err);
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(REQUEST_GAME_LIST, requestGameList);
}
