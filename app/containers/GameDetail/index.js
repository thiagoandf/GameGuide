import { connect } from 'react-redux';
import { compose } from 'redux';
import { push, goBack } from 'react-router-redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectGame } from '../../state/domain/selectors';
import reducer from '../../state/domain/reducer';
import { requestGameList } from '../../state/domain/actions';
import saga from './saga';

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

const withReducer = injectReducer({ key: 'domain', reducer });
const withSaga = injectSaga({ key: 'domain', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(GameDetail);
