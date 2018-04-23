import React from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const GameList = (props) => (
  <div>
    <GridList
      cellHeight={180}
    >
      <Subheader>December</Subheader>
      {props.gameList.map((game) => (
        <GridTile
          key={game.img}
          title={game.title}
          subtitle={<span>by <b>{game.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={game.img} alt="cool game" />
        </GridTile>
      ))}
    </GridList>
  </div>
);

GameList.propTypes = {
  gameList: PropTypes.arrayOf(PropTypes.object),
};

export default GameList;
