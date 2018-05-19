import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, FlatButton } from 'material-ui';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';

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
  title: {
    cursor: 'pointer',
    userSelect: 'none',
    webkitUserSelect: 'none',
  },
};

class Recommendations extends React.Component {
  componentDidMount() {
    this.props.requestGameList();
    this.props.requestRecommendations();
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <div style={{ maxWidth: '100%', minWidth: '100%' }}>
            <AppBar title={<span style={styles.title}>GameGuide</span>} showMenuIconButton={false} onTitleClick={this.props.goToRecommendations}>
              <FlatButton label="Game List" onClick={this.props.goToGameList} style={styles.buttonStyle} />
              <FlatButton icon={<PowerSettingsNew />} onClick={this.props.logout} style={styles.buttonStyle} />
            </AppBar>
          </div>
          <Paper>
            <List>
              {this.props.recommendedGames.map((game) =>
                (<ListItem
                  key={game.id}
                  primaryText={game.name}
                  onClick={() => this.props.goToGameDetail(game.id)}
                />))}
            </List>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

Recommendations.propTypes = {
  recommendedGames: PropTypes.array,
  requestGameList: PropTypes.func.isRequired,
  requestRecommendations: PropTypes.func.isRequired,
  goToRecommendations: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  goToGameList: PropTypes.func.isRequired,
  goToGameDetail: PropTypes.func.isRequired, // eslint-disable-line
};

export default Recommendations;
