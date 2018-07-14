import { takeLatest } from 'redux-saga/effects';
import { REQUEST_GAME_LIST } from '../../state/domain/constants';
import { requestGameList } from '../../state/domain/sagas';

export default function* defaultSaga() {
  yield takeLatest(REQUEST_GAME_LIST, requestGameList);
}
