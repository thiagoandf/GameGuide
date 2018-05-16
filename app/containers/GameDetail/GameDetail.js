import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TokaidoImage from 'images/tokaido.jpg';
import { AppBar, FlatButton } from 'material-ui';


const muiTheme = getMuiTheme({
  appBar: {
    color: '#263238',
    textColor: 'rgba(255, 255, 255, 0.87)',
    maxWidth: 500,
  },
  flatButton: {
    fontWeight: 600,
  },
});

const styles = {
  buttonStyle: {
    backgroundColor: 'transparent',
    color: 'white',
    fontWeight: 50,
    paddingTop: 12,
    height: 40,
  },
  notShownButton: {
    display: 'none',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  imageDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 100,
  },
  gameImage: {
    maxWidth: 400,
    height: 'auto',
  },
};

class GameDetail extends React.Component {
  componentDidMount() {
    this.props.requestGameList();
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <div style={{ maxWidth: '100%', minWidth: '100%' }}>
            <AppBar title="GameGuide" showMenuIconButton={false}>
              <FlatButton label="Go Back" style={styles.buttonStyle} onClick={this.props.goBack} />
            </AppBar>
            <div style={styles.imageDiv}>
              <div>
                <img src={TokaidoImage} alt="cool game" style={styles.gameImage} />
              </div>
              <div>
                <h1>{this.props.game.name}</h1>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

GameDetail.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  requestGameList: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default GameDetail;
