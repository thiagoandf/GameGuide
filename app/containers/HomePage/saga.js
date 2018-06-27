import { all, takeLatest } from 'redux-saga/effects';

import { tryLogin } from 'domain/sagas';
import { TRY_LOGIN } from 'domain/constants';

export default function* defaultSaga() {
  yield all([takeLatest(TRY_LOGIN, tryLogin)]);
}
