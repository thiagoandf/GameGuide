/**
 *
 * GameDetail
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// import injectSaga from 'utils/injectSaga';
// import injectReducer from 'utils/injectReducer';
// import makeSelectGameDetail from './selectors';
// import reducer from './reducer';
// import saga from './saga';
import messages from './messages';

const GameDetail = () => (
  <div>
    <FormattedMessage {...messages.header} />
  </div>
);

GameDetail.propTypes = {};

const mapStateToProps = createStructuredSelector({
  // gamedetail: makeSelectGameDetail(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({ key: 'gamedetail', reducer });
// const withSaga = injectSaga({ key: 'gamedetail', saga });

export default compose(
  // withReducer,
  // withSaga,
  withConnect,
)(GameDetail);
