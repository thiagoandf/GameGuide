import { fromJS } from 'immutable';

const initialState = fromJS({
  id: -1,
  name: '',
  year: '',
  age: '',
  numberOfPlayers: '',
  duration: '',
  description: '',
  coverImage: '',
});

function gameReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default gameReducer;
