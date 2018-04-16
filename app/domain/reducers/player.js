import { fromJS } from 'immutable';

const initialState = fromJS({
  username: '',
  token: '',
  likedGames: [],
  dislikedGames: [],
});

function playerReducer(state = initialState, action) {
  switch (action) {
    default:
      return state;
  }
}

export default playerReducer;
