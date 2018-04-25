import { all, takeLatest } from 'redux-saga/effects';

import { likeGame, requestGameList } from 'domain/sagas';
import { LIKE_GAME, REQUEST_GAME_LIST } from 'domain/constants';

export default function* defaultSaga() {
  yield all([
    takeLatest(LIKE_GAME, likeGame),
    takeLatest(REQUEST_GAME_LIST, requestGameList),
  ]);
}
