import { push } from 'react-router-redux';
import {
  ADD_RELATIONSHIP,
  LOAD_GAME_LIST,
  LOAD_RECOMMENDATIONS,
  LOAD_TOKEN,
  UPDATE_RELATIONSHIP,
  LOAD_CUSTOMER_INFO,
  LOAD_USER_INFO,
} from './constants';
import { selectPlayerToken } from './selectors';

export default ({
  getGameList,
  postPlayerSignup,
  postViewGame,
  postLikeGame,
  postOwnGame,
  getPlayerInfo,
  getRecommendations,
  postLogin,
  getCustomerInfo,
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
      getCustomerInfo(token)
        .then(info => {
          dispatch(loadCustomerInfo(info));
          dispatch(push('/report'));
        })
        .catch(() => {
          dispatch(push('/recommendations'));
        });
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

  const tryPlayerSignup = (
    email,
    password,
    avatarUrl,
    collectionSize,
    weeklyPlayTime,
  ) => dispatch => {
    postPlayerSignup(
      email,
      password,
      avatarUrl,
      collectionSize,
      weeklyPlayTime,
    ).then(({ token }) => {
      dispatch(loadToken(token));
      dispatch(push('/playHistory'));
    });
  };

  const requestCustomerInfo = () => (dispatch, getState) => {
    const token = selectPlayerToken(getState());
    getCustomerInfo(token)
      .then(info => dispatch(loadCustomerInfo(info)))
      .catch(() => {});
  };

  const loadCustomerInfo = info => ({
    type: LOAD_CUSTOMER_INFO,
    info,
  });

  const loadUserInfo = () => (dispatch, getState) => {
    const token = selectPlayerToken(getState());
    getPlayerInfo(token)
      .then(info => dispatch({ type: LOAD_USER_INFO, info }))
      .catch(() => {});
  };

  return {
    loadUserInfo,
    requestGameList,
    requestCustomerInfo,
    viewGame,
    likeGame,
    ownGame,
    requestPlayerInfo,
    requestRecommendations,
    tryLogin,
    trySignUp,
    tryPlayerSignup,
  };
};
