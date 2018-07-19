import { push } from 'react-router-redux';
import {
  LOAD_GAME_LIST,
  LOAD_RECOMMENDATIONS,
  LOAD_TOKEN,
  UPDATE_LIKED_GAMES,
} from './constants';
import { selectPlayerToken } from './selectors';

export default ({
  postLikeGame,
  getGameList,
  getRecommendations,
  postLogin,
  postSignup,
}) => {
  const requestGameList = () => dispatch => {
    getGameList().then(gameList => {
      dispatch(loadGameList(gameList));
    });
  };

  const loadGameList = gameList => ({
    type: LOAD_GAME_LIST,
    gameList,
  });

  const likeGame = gameId => (dispatch, getState) => {
    const token = selectPlayerToken(getState());
    postLikeGame(gameId, token)
      .then(() => dispatch(updateLikedGames(gameId)))
      .catch(() => {});
  };

  const updateLikedGames = gameId => ({
    type: UPDATE_LIKED_GAMES,
    gameId,
  });

  const requestRecommendations = () => (dispatch, getState) => {
    const token = selectPlayerToken(getState());
    getRecommendations(token).then(recommendations => {
      dispatch(loadRecommendations(recommendations));
    });
  };

  const loadRecommendations = recommendations => ({
    type: LOAD_RECOMMENDATIONS,
    recommendations,
  });

  const tryLogin = (email, password) => dispatch => {
    postLogin(email, password).then(({ token }) => {
      dispatch(loadToken(token));
      dispatch(push('/recommendations'));
    });
  };

  const loadToken = token => ({
    type: LOAD_TOKEN,
    token,
  });

  const trySignUp = (email, password) => dispatch => {
    postSignup(email, password).then(({ token }) => {
      dispatch(loadToken(token));
      dispatch(push('/games'));
    });
  };

  return {
    requestGameList,
    likeGame,
    requestRecommendations,
    tryLogin,
    trySignUp,
  };
};
