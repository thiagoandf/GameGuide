import { createSelector } from 'reselect';

const selectDomain = state => state.registration;

export const selectPlayerAvatar = createSelector(
  selectDomain,
  player => player.avatarUrl,
);

export const selectPlayerEmail = createSelector(
  selectDomain,
  player => player.email,
);
