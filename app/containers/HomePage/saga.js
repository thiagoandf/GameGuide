import { all, takeLatest } from 'redux-saga/effects';

import { tryLogin } from '../../state/domain/sagas';
import { TRY_LOGIN } from '../../state/domain/constants';

export default function* defaultSaga() {
  yield all([takeLatest(TRY_LOGIN, tryLogin)]);
}
