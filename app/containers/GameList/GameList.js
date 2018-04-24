import React from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class GameList extends React.PureComponent {
  componentDidMount() {
    console.log('Requesting game list');
    this.props.requestGameList();
  }

  render() {
    return (
      <div>
        <GridList
          cellHeight={180}
        >
          <Subheader>December</Subheader>
          {this.props.gameList.map((game) => (
            <GridTile
              key={game.img}
              title={game.title}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
              <img src={game.img} alt="cool game" />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

GameList.propTypes = {
  gameList: PropTypes.arrayOf(PropTypes.object),
  requestGameList: PropTypes.func.isRequired,
};

export default GameList;
