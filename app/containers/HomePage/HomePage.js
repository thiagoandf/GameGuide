import React from 'react';
import PropTypes from 'prop-types';
import { Paper, RaisedButton, TextField } from 'material-ui';

const paperStyle = {
  textAlign: 'center',
  height: '100%',
  display: 'block',
  padding: '100',
};

const divStyle = {
  display: 'block',
  backgroundColor: 'blue',
  paddingTop: '6.5%',
  paddingBottom: '6.5%',
  paddingLeft: '200',
  paddingRight: '200',
};

const elementStyle = {
  margin: '50',
  color: 'white',
};

const HomePage = (props) => {
  const handleOnChangeEmail = (event) => {
    props.onChangeEmail(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    props.onChangePassword(event.target.value);
  };

  return (
    <div style={divStyle}>
      <Paper style={paperStyle}>
        <TextField
          style={elementStyle}
          hintText="Email"
          value={props.email}
          onChange={handleOnChangeEmail}
        /><br />
        <TextField
          type="password"
          style={elementStyle}
          hintText="Password"
          value={props.password}
          onChange={handleOnChangePassword}
        /><br />
        <RaisedButton label="Login" style={elementStyle} onClick={props.tryLogin} />
        <RaisedButton label="Signup" style={elementStyle} onClick={props.goToSignup} />
      </Paper>
    </div>
  );
};

HomePage.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired, // eslint-disable-line
  onChangePassword: PropTypes.func.isRequired,
  tryLogin: PropTypes.func.isRequired,
  goToSignup: PropTypes.func.isRequired,
};

export default HomePage;
