import React from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import { AppBar, FlatButton } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TokaidoImage from 'images/tokaido.jpg';
import PowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';

const muiTheme = getMuiTheme({
  appBar: {
    color: '#263238',
    textColor: 'rgba(255, 255, 255, 0.87)',
    width: '100px',
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
    height: '100%',
  },
  gameStyle: {
    padding: '5%',
    marginTop: '20px',
    minWidth: '100%',
    textAlign: 'center',
    align: 'center',
  },
  gridList: {
    minWidth: '70%',
    maxWidth: '70%',
    fullWidth: true,
    height: 'auto',
  },
  image: {
    minWidth: '100%',
    maxWidth: '100%',
    height: 'auto',
    marginTop: '-30%',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    cursor: 'pointer',
    userSelect: 'none',
    webkitUserSelect: 'none',
  },
};

class GameList extends React.Component {
  componentDidMount() {
    this.props.requestGameList();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <div style={{ maxWidth: '100%', minWidth: '100%' }}>
            <AppBar title={<span style={styles.title}>GameGuide</span>} showMenuIconButton={false} onTitleClick={this.props.goToRecommendations}>
              <FlatButton label="Recommendations" onClick={this.props.goToRecommendations} style={styles.buttonStyle} />
              <FlatButton icon={<PowerSettingsNew />} onClick={this.props.logout} style={styles.buttonStyle} />
            </AppBar>
            <div style={styles.root}>
              <GridList
                cellHeight={200}
                cellWidth={'100%'}
                style={styles.gridList}
              >
                {this.props.gameList.map((game) => (
                  <GridTile
                    key={game.id}
                    title={<span role="button" style={styles.title} tabIndex="0" onClick={() => this.props.goToGameDetail(game.id)}><strong>{game.name}</strong> </span>}
                    actionIcon={<IconButton><ThumbUp color="white" onClick={() => this.props.likeGame(game.id)} /></IconButton>}
                    style={styles.gameStyle}
                  >
                    <span role="button" style={styles.title} tabIndex="0" onClick={() => this.props.goToGameDetail(game.id)}>
                      <img src={TokaidoImage} alt="cool game" style={styles.image} />
                    </span>
                  </GridTile>
                ))}
              </GridList>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

GameList.propTypes = {
  gameList: PropTypes.arrayOf(PropTypes.object),
  requestGameList: PropTypes.func.isRequired,
  goToRecommendations: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  likeGame: PropTypes.func.isRequired, // eslint-disable-line
  goToGameDetail: PropTypes.func.isRequired, // eslint-disable-line
};

export default GameList;
