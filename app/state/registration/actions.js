import { push } from 'react-router-redux';

import { ADD_AVATAR, ADD_BASIC_INFORMATION, ADD_HISTORY } from './constants';

export const addAvatar = avatarUrl => ({
  type: ADD_AVATAR,
  avatarUrl,
});

export const addBasicInformation = (email, password) => ({
  type: ADD_BASIC_INFORMATION,
  email,
  password,
});

export const addHistory = (weeklyPlayTime, collectionSize) => ({
  type: ADD_HISTORY,
  weeklyPlayTime,
  collectionSize,
});

export const addBasicInformationAndPush = (email, password) => dispatch => {
  dispatch(addBasicInformation(email, password));
  dispatch(push('/avatar'));
};

export const addAvatarAndPush = avatarUrl => dispatch => {
  dispatch(addAvatar(avatarUrl));
  dispatch(push('/experience'));
};

export const addHistoryAndPush = (
  weeklyPlayTime,
  collectionSize,
) => dispatch => {
  dispatch(addHistory(weeklyPlayTime, collectionSize));
  dispatch(push('/playHistory'));
};
