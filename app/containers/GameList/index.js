import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from 'domain/reducer';
import { makeSelectGameList, makeSelectPlayer } from 'domain/selectors';
import { requestGameList, likeGame } from 'domain/actions';

import saga from './saga';
import GameList from './GameList';

const mapStateToProps = createStructuredSelector({
  gameList: makeSelectGameList(),
  player: makeSelectPlayer(),
});

const mapDispatchToProps = (dispatch) => ({
  requestGameList: () => dispatch(requestGameList()),
  likeGame: (id) => dispatch(likeGame(id)),
  goToRecommendations: () => dispatch(push('/recommendations')),
  goToGameList: () => dispatch(push('/games')),
  goToGameDetail: (gameId) => dispatch(push(`/game/${gameId}`)),
  logout: () => dispatch(push('/')),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'domain', reducer });
const withSaga = injectSaga({ key: 'domain', saga });

export default compose(withReducer, withSaga, withConnect)(GameList);
