import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import {
  requestRecommendations,
  requestGameList,
} from '../../state/domain/actions';
import { makeSelectRecommendations } from '../../state/domain/selectors';

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

export default compose(withConnect)(Recommendations);
