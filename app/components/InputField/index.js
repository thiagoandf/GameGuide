import React from 'react';
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
class InputField extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={divStyle}>
        <Paper style={paperStyle}>
          <TextField id="email" style={elementStyle} hintText="Email" /><br />
          <TextField type="password" id="password" style={elementStyle} hintText="Password" /><br />
          <RaisedButton label="Login" style={elementStyle} />
        </Paper>
      </div>
    );
  }
}

InputField.propTypes = {};

export default InputField;
