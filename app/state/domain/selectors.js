import { createSelector } from 'reselect';

const selectDomain = state => state.domain;

const selectGamesMap = createSelector(selectDomain, domain => domain.games);

export const selectGames = createSelector(selectGamesMap, gamesMap =>
  Object.values(gamesMap),
);

export const selectPlayer = createSelector(
  selectDomain,
  domain => domain.player,
);

export const selectRecommendationIds = createSelector(
  selectPlayer,
  player => player.recommendedGames,
);

export const makeSelectGame = id =>
  createSelector(selectGamesMap, games => games[id]);

export const selectPlayerToken = createSelector(
  selectPlayer,
  player => player.token,
);

export const selectPlayerLikedGames = createSelector(
  selectPlayer,
  player => player.likedGames,
);

export const selectRecommendations = createSelector(
  selectGamesMap,
  selectRecommendationIds,
  (games, recommendations) =>
    recommendations.map(recommendation => games[recommendation]),
);
