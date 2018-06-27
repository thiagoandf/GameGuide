import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from 'domain/reducer';
import { selectPlayerEmail, selectPlayerPassword } from 'domain/selectors';
import {
  updateLoginEmail,
  updateLoginPassword,
  trySignUp,
} from 'domain/actions';

import Signup from './Signup';
import saga from './saga';

const mapStateToProps = createStructuredSelector({
  email: selectPlayerEmail,
  password: selectPlayerPassword,
});

const mapDispatchToProps = dispatch => ({
  onChangeEmail: email => dispatch(updateLoginEmail(email)),
  onChangePassword: password => dispatch(updateLoginPassword(password)),
  trySignUp: () => dispatch(trySignUp()),
  goBack: () => dispatch(push('/')),
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
)(Signup);
