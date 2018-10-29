import {
  ADD_AVATAR,
  ADD_BASIC_INFORMATION,
  ADD_HISTORY,
  ADD_LIKED_GAMES,
} from './constants';

const initialState = {
  email: '',
  password: '',
  avatarUrl: '',
  weeklyPlayTime: '',
  collectionSize: '',
  likedGames: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case ADD_BASIC_INFORMATION:
      return { ...state, email: action.email, password: action.password };
    case ADD_AVATAR:
      return { ...state, avatarUrl: action.avatarUrl };
    case ADD_HISTORY:
      return {
        ...state,
        weeklyPlayTime: action.weeklyPlayTime,
        collectionSize: action.collectionSize,
      };
    case ADD_LIKED_GAMES:
      return { ...state, likedGames: action.likedGames };
  }
};

export default reducer;
