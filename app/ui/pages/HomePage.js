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

class HomePage extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleOnChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleOnChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  onSubmit = () => {
    this.props.tryLogin(this.state.email, this.state.password);
  };

  render() {
    return (
      <VerticalContainer>
        <LogoHeader />
        <Paper style={styles.paper}>
          <VerticalContainer>
            <ListSubheader>
              Bem-vindo! Entre com seu e-mail e senha:
            </ListSubheader>
            <TextField
              style={styles.elementStyle}
              placeholder="E-mail"
              value={this.state.email}
              onChange={this.handleOnChangeEmail}
            />
            <TextField
              type="password"
              style={styles.elementStyle}
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleOnChangePassword}
            />
            <Button
              variant="raised"
              style={styles.login_button}
              onClick={this.onSubmit}
            >
              Login
            </Button>
            <Button
              variant="raised"
              style={styles.sign_up_button}
              onClick={this.props.goToSignup}
            >
              Ir para cadastro
            </Button>
          </VerticalContainer>
        </Paper>
      </VerticalContainer>
    );
  }
}

HomePage.propTypes = {
  tryLogin: PropTypes.func.isRequired,
  goToSignup: PropTypes.func.isRequired,
};

export default HomePage;
