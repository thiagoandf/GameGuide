import { connect } from 'react-redux';
import { compose } from 'redux';
import { push, goBack } from 'react-router-redux';

import { makeSelectGame } from '../../state/domain/selectors';
import { requestGameList } from '../../state/domain/actions';

import GameDetail from '../../ui/pages/GameDetail';

const mapStateToProps = (state, ownProps) => ({
  game: makeSelectGame(ownProps.match.params.id)(state),
});

const mapDispatchToProps = dispatch => ({
  goToRecommendations: () => dispatch(push('/recommendations')),
  goToGameList: () => dispatch(push('/games')),
  logout: () => dispatch(push('/')),
  requestGameList: () => dispatch(requestGameList()),
  goBack: () => dispatch(goBack()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(GameDetail);
