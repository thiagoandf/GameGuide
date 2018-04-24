import { createSelector } from 'reselect';

const selectDomain = (state) => state.get('domain');

const makeSelectGameList = () => createSelector(
  selectDomain,
  (domain) => domain.get('games').toJS()
);

const makeSelectPlayer = () => createSelector(
  selectDomain,
  (domain) => domain.get('player').toJS()
);

export default selectDomain;
export {
  makeSelectGameList,
  makeSelectPlayer,
};
