import { createSelector } from 'reselect';

const selectDomain = (state) => state.get('domain');

const makeSelectGameList = () => createSelector(
  selectDomain,
  (domain) => domain.games && domain.games.toJS()
);

const makeSelectPlayer = () => createSelector(
  selectDomain,
  (domain) => domain.player && domain.player.toJS()
);

export default selectDomain;
export {
  makeSelectGameList,
  makeSelectPlayer,
};
