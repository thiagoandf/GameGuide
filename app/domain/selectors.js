import { createSelector } from 'reselect';

const selectDomain = state => state.domain;
const selectGames = createSelector(selectDomain, domain => domain.games);
const selectPlayer = createSelector(selectDomain, domain => domain.player);
const selectRecommendationIds = createSelector(
  selectPlayer,
  player => player.recommendedGames,
);

export const makeSelectGameList = () =>
  createSelector(selectGames, games => games);

export const makeSelectGame = id =>
  createSelector(
    makeSelectGameList(),
    // TODO: ensure it is sorted and binary search
    games => games.find(item => item.id === +id),
  );

export const makeSelectPlayer = () =>
  createSelector(selectPlayer, player => player);

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

export const makeSelectRecommendations = () =>
  createSelector(
    selectGames,
    selectRecommendationIds,
    (games, recommendations) =>
      games.filter(game =>
        recommendations.find(recommendation => recommendation === game.id),
      ),
  );
