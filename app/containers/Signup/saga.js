import { takeLatest } from 'redux-saga/effects';

import { trySignUp } from '../../state/domain/sagas';
import { TRY_SIGNUP } from '../../state/domain/constants';

export default function* defaultSaga() {
  yield takeLatest(TRY_SIGNUP, trySignUp);
}
