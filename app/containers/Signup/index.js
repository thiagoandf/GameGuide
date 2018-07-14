import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import ackbar from '../../api/ackbar';
import makeDomainActions from '../../state/domain/actions';
import {
  selectPlayerEmail,
  selectPlayerPassword,
} from '../../state/domain/selectors';
import Signup from '../../ui/pages/Signup';

const domainActions = makeDomainActions(ackbar);

const mapStateToProps = createStructuredSelector({
  email: selectPlayerEmail,
  password: selectPlayerPassword,
});

const mapDispatchToProps = dispatch => ({
  onChangeEmail: email => dispatch(domainActions.updateLoginEmail(email)),
  onChangePassword: password =>
    dispatch(domainActions.updateLoginPassword(password)),
  trySignUp: () => dispatch(domainActions.trySignUp()),
  goBack: () => dispatch(push('/')),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Signup);
