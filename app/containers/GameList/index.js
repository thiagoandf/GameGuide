import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import {
  makeSelectGameList,
  makeSelectPlayer,
} from '../../state/domain/selectors';
import { requestGameList, likeGame } from '../../state/domain/actions';

import GameList from '../../ui/pages/GameList';

const mapStateToProps = createStructuredSelector({
  gameList: makeSelectGameList(),
  player: makeSelectPlayer(),
});

const mapDispatchToProps = dispatch => ({
  requestGameList: () => dispatch(requestGameList()),
  likeGame: id => dispatch(likeGame(id)),
  goToRecommendations: () => dispatch(push('/recommendations')),
  goToGameList: () => dispatch(push('/games')),
  goToGameDetail: gameId => dispatch(push(`/game/${gameId}`)),
  logout: () => dispatch(push('/')),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(GameList);
