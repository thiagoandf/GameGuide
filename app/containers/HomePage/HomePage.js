import React from 'react';
import PropTypes from 'prop-types';
import { Paper, RaisedButton, TextField } from 'material-ui';
import Logo from 'images/logo.png';

const styles = {
  elementStyle: {
    margin: '40',
    color: 'white',
  },
  paper: {
    height: '100%',
    display: 'block',
    margin: 0,
    padding: 15,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    marginTop: 0,
  },
  section: {
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  login_button: {
    margin: 6,
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
    paddingTop: 5,
    textColor: 'blue',
    color: 'blue',
  },
  sign_up_button: {
    margin: 6,
    alignItems: 'center',
  },
};

const HomePage = (props) => {
  const handleOnChangeEmail = (event) => {
    props.onChangeEmail(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    props.onChangePassword(event.target.value);
  };

  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <img src={Logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
      </div>
      <Paper style={styles.paper}>
        <TextField
          style={styles.elementStyle}
          hintText="Email"
          value={props.email}
          onChange={handleOnChangeEmail}
        />
        <br />
        <TextField
          type="password"
          style={styles.elementStyle}
          hintText="Password"
          value={props.password}
          onChange={handleOnChangePassword}
        />
        <br />
        <div style={styles.container}>
          <RaisedButton label="Login" style={styles.login_button} onClick={props.tryLogin} />
          <RaisedButton label="Signup" style={styles.sign_up_button} onClick={props.goToSignup} />
        </div>
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
