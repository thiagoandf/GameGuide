import { push } from 'react-router-redux';
import {
  ADD_RELATIONSHIP,
  LOAD_GAME_LIST,
  LOAD_RECOMMENDATIONS,
  LOAD_TOKEN,
  UPDATE_RELATIONSHIP,
} from './constants';
import { selectPlayerToken } from './selectors';

export default ({
  getGameList,
  // postPlayerSignup,
  postViewGame,
  postLikeGame,
  postOwnGame,
  getPlayerInfo,
  getRecommendations,
  postLogin,
  // getReportUrls,
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

  const viewGame = gameId => (dispatch, getState) => {
    const token = selectPlayerToken(getState());
    postViewGame(gameId, token)
      .then(() => dispatch(addGameRelationship({ view: [gameId] })))
      .catch(() => {});
  };

  const likeGame = gameId => (dispatch, getState) => {
    const token = selectPlayerToken(getState());
    postLikeGame(gameId, token)
      .then(() => dispatch(addGameRelationship({ like: [gameId] })))
      .catch(() => {});
  };

  const ownGame = gameId => (dispatch, getState) => {
    const token = selectPlayerToken(getState());
    postOwnGame(gameId, token)
      .then(() => dispatch(addGameRelationship({ own: [gameId] })))
      .catch(() => {});
  };

  const addGameRelationship = ({ view = [], like = [], own = [] }) => ({
    type: ADD_RELATIONSHIP,
    newRelationships: { view, like, own },
  });

  const requestPlayerInfo = () => (dispatch, getState) => {
    const token = selectPlayerToken(getState());
    getPlayerInfo(token)
      .then(info =>
        dispatch(
          updateGameRelationship({
            view: info.views,
            like: info.likes,
            own: info.owns,
          }),
        ),
      )
      .catch(() => {});
  };

  const updateGameRelationship = ({ view, like, own }) => ({
    type: UPDATE_RELATIONSHIP,
    relationships: { view, like, own },
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
    viewGame,
    likeGame,
    ownGame,
    requestPlayerInfo,
    requestRecommendations,
    tryLogin,
    trySignUp,
  };
};
