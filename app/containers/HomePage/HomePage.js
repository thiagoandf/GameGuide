import React from 'react';
import PropTypes from 'prop-types';
import { Paper, RaisedButton, TextField, Subheader } from 'material-ui';
import VerticalContainer from '../../components/VerticalContainer';
import LogoHeader from '../../components/LogoHeader';

const styles = {
  elementStyle: {
    marginBottom: '7',
    color: 'white',
  },
  paper: {
    height: '100%',
    width: '90%',
    display: 'block',
    margin: 2,
    padding: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    marginTop: 0,
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
    <VerticalContainer>
      <LogoHeader />
      <Paper style={styles.paper}>
        <VerticalContainer>
          <Subheader>Bem-vindo! Entre com seu e-mail e senha:</Subheader>
          <TextField
            style={styles.elementStyle}
            hintText="E-mail"
            value={props.email}
            onChange={handleOnChangeEmail}
          />
          <TextField
            type="password"
            style={styles.elementStyle}
            hintText="Password"
            value={props.password}
            onChange={handleOnChangePassword}
          />
          <RaisedButton
            label="Login"
            style={styles.login_button}
            onClick={props.tryLogin}
          />
          <RaisedButton
            label="Ir para cadastro"
            style={styles.sign_up_button}
            onClick={props.goToSignup}
          />
        </VerticalContainer>
      </Paper>
    </VerticalContainer>
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
