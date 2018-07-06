import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Button, TextField, ListSubheader } from '@material-ui/core';
import VerticalContainer from '../components/VerticalContainer';
import LogoHeader from '../components/LogoHeader';

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

const Signup = props => {
  const handleOnChangeEmail = event => {
    props.onChangeEmail(event.target.value);
  };

  const handleOnChangePassword = event => {
    props.onChangePassword(event.target.value);
  };

  return (
    <VerticalContainer>
      <LogoHeader />
      <Paper style={styles.paper}>
        <VerticalContainer>
          <ListSubheader>Faça seu cadastro:</ListSubheader>
          <TextField
            style={styles.elementStyle}
            placeholder="Email"
            value={props.email}
            onChange={handleOnChangeEmail}
          />
          <TextField
            style={styles.elementStyle}
            type="password"
            placeholder="Password"
            value={props.password}
            onChange={handleOnChangePassword}
          />
          <Button
            variant="raised"
            style={styles.login_button}
            onClick={props.trySignUp}
          >
            Cadastrar
          </Button>
          <Button
            variant="raised"
            style={styles.sign_up_button}
            onClick={props.goBack}
          >
            Voltar para login
          </Button>
        </VerticalContainer>
      </Paper>
    </VerticalContainer>
  );
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
