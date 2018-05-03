import { createSelector } from 'reselect';

/**
 * Direct selector to the gameDetail state domain
 */
const selectGameDetailDomain = (state) => state.get('gameDetail');

/**
 * Other specific selectors
 */


/**
 * Default selector used by GameDetail
 */

const makeSelectGameDetail = () => createSelector(
  selectGameDetailDomain,
  (substate) => substate.toJS()
);

export default makeSelectGameDetail;
export {
  selectGameDetailDomain,
};
