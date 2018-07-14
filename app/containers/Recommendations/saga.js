import { all, takeLatest } from 'redux-saga/effects';

import {
  requestGameList,
  requestRecommendations,
} from '../../state/domain/sagas';
import {
  REQUEST_GAME_LIST,
  REQUEST_RECOMMENDATIONS,
} from '../../state/domain/constants';

export default function* defaultSaga() {
  yield all([
    takeLatest(REQUEST_RECOMMENDATIONS, requestRecommendations),
    takeLatest(REQUEST_GAME_LIST, requestGameList),
  ]);
}
