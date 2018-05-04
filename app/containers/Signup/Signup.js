import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton, TextField } from 'material-ui';

const Signup = (props) => {
  const handleOnChangeEmail = (event) => {
    props.onChangeEmail(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    props.onChangePassword(event.target.value);
  };

  return (<div>
    <TextField
      hintText="Email"
      value={props.email}
      onChange={handleOnChangeEmail}
    />
    <TextField
      type="password"
      hintText="Password"
      value={props.password}
      onChange={handleOnChangePassword}
    />
    <RaisedButton label="Register" onClick={props.trySignUp} />
    <RaisedButton label="Back to login" onClick={props.goBack} />
  </div>);
};

Signup.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onChangeEmail: PropTypes.func.isRequired, // eslint-disable-line
  onChangePassword: PropTypes.func.isRequired,
  trySignUp: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default Signup;
