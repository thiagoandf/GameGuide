import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import { requestRecommendations, requestGameList } from 'domain/actions';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from 'domain/reducer';
import { makeSelectRecommendations } from 'domain/selectors';

import saga from './saga';
import Recommendations from './Recommendations';

const mapStateToProps = createStructuredSelector({
  recommendedGames: makeSelectRecommendations(),
});

const mapDispatchToProps = dispatch => ({
  requestGameList: () => dispatch(requestGameList()),
  requestRecommendations: () => dispatch(requestRecommendations()),
  goToRecommendations: () => dispatch(push('/recommendations')),
  goToGameList: () => dispatch(push('/games')),
  goToGameDetail: gameId => dispatch(push(`/game/${gameId}`)),
  logout: () => dispatch(push('/')),
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
)(Recommendations);
