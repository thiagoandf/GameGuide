import {
  LOAD_RECOMMENDATIONS,
  LOAD_TOKEN,
  ADD_RELATIONSHIP,
  UPDATE_RELATIONSHIP,
} from '../constants';

const initialState = {
  token: '',
  viewedGames: {},
  likedGames: {},
  ownedGames: {},
  recommendedGames: [],
};

function playerReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_RELATIONSHIP:
      return {
        ...state,
        viewedGames: {
          ...state.viewedGames,
          ...makeTruthMap(action.newRelationships.view),
        },
        likedGames: {
          ...state.likedGames,
          ...makeTruthMap(action.newRelationships.like),
        },
        ownedGames: {
          ...state.ownedGames,
          ...makeTruthMap(action.newRelationships.own),
        },
      };
    case UPDATE_RELATIONSHIP:
      return {
        ...state,
        viewedGames: makeTruthMap(action.relationships.view),
        likedGames: makeTruthMap(action.relationships.like),
        ownedGames: makeTruthMap(action.relationships.own),
      };
    case LOAD_RECOMMENDATIONS:
      return { ...state, recommendedGames: action.recommendations };
    case LOAD_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
}

const makeTruthMap = ids => {
  const truthMap = {};
  ids.forEach(id => {
    truthMap[id] = true;
  });
  return truthMap;
};

export default playerReducer;
