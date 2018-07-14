import makeDomainActions from '../../../state/domain/actions';
import domainReducer from '../../../state/domain/reducer';

const initialState = {
  domain: {
    player: {},
    games: [],
  },
};

let state;

const dispatch = action => {
  state.domain = domainReducer(state.domain, action);
};

const getState = () => state;

describe('Domain actions', () => {
  beforeEach(() => {
    state = initialState;
  });

  describe('Request game list', () => {
    it('Should fill game list with API result', async () => {
      const mockGames = [{ id: 1 }, { id: 2 }];
      const domainActions = makeDomainActions({
        getGameList: () => Promise.resolve(mockGames),
      });

      const thunk = domainActions.requestGameList();
      await thunk(dispatch, getState);

      expect(state.domain.games).toEqual(mockGames);
    });
  });

  describe('Like game', () => {
    it('Should add liked game to local field if update is successful', async () => {
      state.domain.player = { likedGames: [] };
      const domainActions = makeDomainActions({
        postLikeGame: () => Promise.resolve(),
      });

      const thunk = domainActions.likeGame(42);
      await thunk(dispatch, getState);

      expect(state.domain.player.likedGames).toEqual([42]);
    });
  });
});
