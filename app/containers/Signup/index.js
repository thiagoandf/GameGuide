import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import ackbar from '../../api/ackbar';
import makeDomainActions from '../../state/domain/actions';
import Signup from '../../ui/pages/Signup';

const domainActions = makeDomainActions(ackbar);

const mapDispatchToProps = dispatch => ({
  trySignUp: (email, password) =>
    dispatch(domainActions.trySignUp(email, password)),
  goBack: () => dispatch(push('/')),
});

const withConnect = connect(
  undefined,
  mapDispatchToProps,
);

export default compose(withConnect)(Signup);
