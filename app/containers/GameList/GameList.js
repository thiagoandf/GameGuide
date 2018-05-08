import React from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import { AppBar, FlatButton } from 'material-ui';
import TokaidoImage from 'images/tokaido.jpg';

const buttonStyle = {
  backgroundColor: 'transparent',
  color: 'white',
};

const gameStyle = {
  margin: '20px',
  maxWidth: '300px',
  textAlign: 'center',
  align: 'center',
};


const GameList = (props) => (
  <div>
    <AppBar title="GameGuide" onLeftIconButtonClick={this.handleToggle} >
      <FlatButton label="Recommendations" onClick={props.goToRecommendations} style={buttonStyle} />
      <FlatButton label="Request Game List" onClick={props.requestGameList} style={buttonStyle} />
      <FlatButton label="Logout" onClick={props.logout} style={buttonStyle} />
    </AppBar>
    <GridList
      cellHeight={180}
      style={{ alignItems: 'center' }}
    >
      {props.gameList.map((game) => (
        <GridTile
          key={game.id}
          title={game.name}
          actionIcon={<IconButton><ThumbUp color="white" onClick={() => props.likeGame(game.id)} /></IconButton>}
          style={gameStyle}
          onClick={() => props.goToGameDetail(game.id)}
        >
          <img src={TokaidoImage} alt="cool game" />
        </GridTile>
      ))}
    </GridList>
  </div>
);

GameList.propTypes = {
  gameList: PropTypes.arrayOf(PropTypes.object),
  requestGameList: PropTypes.func.isRequired,
  goToRecommendations: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  likeGame: PropTypes.func.isRequired, // eslint-disable-line
  goToGameDetail: PropTypes.func.isRequired, // eslint-disable-line
};

export default GameList;
