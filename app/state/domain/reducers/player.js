import {
  UPDATE_LIKED_GAMES,
  LOAD_RECOMMENDATIONS,
  LOAD_TOKEN,
  UPDATE_LOGIN_EMAIL,
  UPDATE_LOGIN_PASSWORD,
} from '../constants';

const initialState = {
  email: '',
  password: '',
  token: '',
  likedGames: [],
  dislikedGames: [],
  recommendedGames: [],
};

function playerReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LIKED_GAMES:
      return { ...state, likedGames: [...state.likedGames, action.gameId] };
    case LOAD_RECOMMENDATIONS:
      return { ...state, recommendedGames: action.recommendations };
    case UPDATE_LOGIN_EMAIL:
      return { ...state, email: action.email };
    case UPDATE_LOGIN_PASSWORD:
      return { ...state, password: action.password };
    case LOAD_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
}

export default playerReducer;
