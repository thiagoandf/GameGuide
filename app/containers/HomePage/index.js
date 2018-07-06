import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  selectPlayerEmail,
  selectPlayerPassword,
} from '../../state/domain/selectors';
import {
  updateLoginEmail,
  updateLoginPassword,
  tryLogin,
} from '../../state/domain/actions';
import reducer from '../../state/domain/reducer';

import saga from './saga';
import HomePage from './HomePage';

const mapStateToProps = createStructuredSelector({
  email: selectPlayerEmail,
  password: selectPlayerPassword,
});

const mapDispatchToProps = dispatch => ({
  onChangeEmail: email => dispatch(updateLoginEmail(email)),
  onChangePassword: password => dispatch(updateLoginPassword(password)),
  tryLogin: (email, password) => dispatch(tryLogin(email, password)),
  goToSignup: () => dispatch(push('/signup')),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  tryLogin: () => dispatchProps.tryLogin(stateProps.email, stateProps.password),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
);

const withReducer = injectReducer({ key: 'domain', reducer });
const withSaga = injectSaga({ key: 'domain', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
