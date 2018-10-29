import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import Signup from '../../ui/pages/Signup';
import { addBasicInformationAndPush } from '../../state/registration/actions';

const mapDispatchToProps = dispatch => ({
  addBasicInformation: (email, password) =>
    dispatch(addBasicInformationAndPush(email, password)),
  goBack: () => dispatch(push('/')),
});

const withConnect = connect(
  undefined,
  mapDispatchToProps,
);

export default compose(withConnect)(Signup);
