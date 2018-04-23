
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from 'domain/reducer';
import { makeSelectGameList, makeSelectPlayer } from 'domain/selectors';
import saga from './saga';

import GameList from './GameList';

const mapStateToProps = createStructuredSelector({
  gameList: makeSelectGameList(),
  player: makeSelectPlayer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'gamelist', reducer });
const withSaga = injectSaga({ key: 'gamelist', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(GameList);
