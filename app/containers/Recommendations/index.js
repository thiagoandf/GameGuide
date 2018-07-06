import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  requestRecommendations,
  requestGameList,
} from '../../state/domain/actions';
import reducer from '../../state/domain/reducer';
import { makeSelectRecommendations } from '../../state/domain/selectors';

import saga from './saga';
import Recommendations from '../../ui/pages/Recommendations';

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
