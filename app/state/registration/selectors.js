import { createSelector } from 'reselect';

const selectDomain = state => state.registration;

export const selectPlayerAvatar = createSelector(
  selectDomain,
  registration => registration.avatarUrl,
);

export const selectPlayerEmail = createSelector(
  selectDomain,
  registration => registration.email,
);
