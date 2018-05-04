import { takeLatest } from 'redux-saga/effects';

import { trySignUp } from 'domain/sagas';
import { TRY_SIGNUP } from 'domain/constants';

export default function* defaultSaga() {
  yield takeLatest(TRY_SIGNUP, trySignUp);
}
