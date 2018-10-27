/* eslint-disable prefer-destructuring */
import { push } from 'react-router-redux';

import { ADD_AVATAR, ADD_BASIC_INFORMATION, ADD_HISTORY } from './constants';
import makeDomainActions from '../domain/actions';
import ackbar from '../../api/ackbar';

const domainActions = makeDomainActions(ackbar);


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

export const addHistoryAndPush = (weeklyPlayTime, collectionSize) => (
  dispatch,
  getState,
) => {
  dispatch(addHistory(weeklyPlayTime, collectionSize));
  const email = getState().registration.email;
  const password = getState().registration.password;
  const avatarUrl = getState().registration.avatarUrl;
  dispatch(
    domainActions.tryPlayerSignup(
      email,
      password,
      avatarUrl,
      collectionSize,
      weeklyPlayTime,
    ),
  );
};
