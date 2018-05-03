import React from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import { FlatButton } from 'material-ui';
import TokaidoImage from 'images/tokaido.jpg';

const GameList = (props) => (
  <div>
    <FlatButton label="Request game list" onClick={props.requestGameList} />
    <FlatButton label="Go to recommendations" onClick={props.goToRecommendations} />
    <FlatButton label="Logout" onClick={props.logout} />
    <GridList
      cellHeight={180}
    >
      {props.gameList.map((game) => (
        <GridTile
          key={game.id}
          title={game.name}
          onClick={() => props.goToGameDetail(game.id)}
          actionIcon={<IconButton><ThumbUp color="white" onClick={() => props.likeGame(game.id)} /></IconButton>}
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
