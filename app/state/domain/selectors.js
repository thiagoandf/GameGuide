import { createSelector } from 'reselect';

const selectDomain = state => state.domain;

export const selectGames = createSelector(selectDomain, domain => domain.games);

export const selectPlayer = createSelector(
  selectDomain,
  domain => domain.player,
);

const selectRecommendationIds = createSelector(
  selectPlayer,
  player => player.recommendedGames,
);

export const makeSelectGame = id =>
  createSelector(
    selectGames,
    // TODO: ensure it is sorted and binary search
    games => games.find(item => item.id === +id),
  );

export const selectPlayerEmail = createSelector(
  selectPlayer,
  player => player.email,
);
export const selectPlayerPassword = createSelector(
  selectPlayer,
  player => player.password,
);
export const selectPlayerToken = createSelector(
  selectPlayer,
  player => player.token,
);

export const selectRecommendations = createSelector(
  selectGames,
  selectRecommendationIds,
  (games, recommendations) =>
    games.filter(game =>
      recommendations.find(recommendation => recommendation === game.id),
    ),
);
