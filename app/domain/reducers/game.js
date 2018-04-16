import { fromJS } from 'immutable';

const initialState = fromJS({
  id: -1,
  name: '',
});

function gameReducer(state = initialState, action) {
  switch (action) {
    default:
      return state;
  }
}

export default gameReducer;
