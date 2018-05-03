import { connect } from 'react-redux';
import { compose } from 'redux';
import { goBack } from 'react-router-redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectGame } from 'domain/selectors';
import reducer from 'domain/reducer';
import { requestGameList } from 'domain/actions';
import saga from './saga';

import GameDetail from './GameDetail';

const mapStateToProps = (state, ownProps) => ({
  game: makeSelectGame(ownProps.match.params.id)(state),
});

const mapDispatchToProps = (dispatch) => ({
  requestGameList: () => dispatch(requestGameList()),
  goBack: () => dispatch(goBack()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'domain', reducer });
const withSaga = injectSaga({ key: 'domain', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(GameDetail);
