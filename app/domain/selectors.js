import { createSelector } from 'reselect';

const selectDomain = (state) => state.get('domain');
const selectGames = createSelector(selectDomain, (domain) => domain.get('games'));
const selectPlayer = createSelector(selectDomain, (domain) => domain.get('player'));
const selectRecommendationIds = createSelector(selectPlayer, (player) => player.get('recommendedGames'));

export const makeSelectGameList = () => createSelector(
  selectGames,
  (games) => games.toJS()
);

export const makeSelectPlayer = () => createSelector(
  selectPlayer,
  (player) => player.toJS()
);

export const selectPlayerEmail = createSelector(selectPlayer, (player) => player.get('email'));
export const selectPlayerPassword = createSelector(selectPlayer, (player) => player.get('password'));

export const makeSelectRecommendations = () => createSelector(
  selectGames,
  selectRecommendationIds,
  (games, recommendations) => games.filter((game) => recommendations.has(game.id)).toJS(),
);
