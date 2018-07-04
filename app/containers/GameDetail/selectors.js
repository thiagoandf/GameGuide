import { createSelector } from 'reselect';

/**
 * Direct selector to the gameDetail state domain
 */
const selectGameDetailDomain = state => state.gameDetail;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GameDetail
 */

const makeSelectGameDetail = () =>
  createSelector(selectGameDetailDomain, substate => substate);

export default makeSelectGameDetail;
export { selectGameDetailDomain };
