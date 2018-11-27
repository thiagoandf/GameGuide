/* eslint-disable jsx-a11y/interactive-supports-focus,jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';
import GameTile from '../GameTile';

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// eslint-disable-next-line react/prefer-stateless-function
class GameGrid extends React.Component {
  likedGame(game) {
    return !!this.props.likes[game.id];
  }

  render() {
    const { classes } = this.props;

    return (
      <div
        style={{
          width: this.props.width || '250px',
          height: this.props.height || '250px',
          padding: this.props.padding || '20px',
          paddingLeft: this.props.additionalPadding && '350px',
          maxWidth: this.props.maxWidth || '250px',
          maxHeight: this.props.maxHeight || '250px',
          flexWrap: this.props.wrap ? 'wrap' : 'no-wrap',
          overflowX: this.props.wrap ? 'hidden' : 'auto',
          overflowY: this.props.wrap ? 'auto' : 'hidden',
        }}
        className={classes.root}
      >
        {this.props.gameList.map(game => (
          <div key={game.name} style={{ padding: '10px' }}>
            <GameTile
              color={this.props.color}
              game={game}
              rightButton
              onView={() => {
                this.props.onView(game);
              }}
              onClick={() => {
                this.props.onClick(game);
              }}
              liked={this.likedGame(game)}
            />
          </div>
        ))}
      </div>
    );
  }
}

GameGrid.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  maxWidth: PropTypes.string,
  maxHeight: PropTypes.string,
  classes: PropTypes.object,
  gameList: PropTypes.array,
  padding: PropTypes.number,
  onClick: PropTypes.func,
  onView: PropTypes.func,
  likes: PropTypes.object,
  color: PropTypes.string,
  wrap: PropTypes.bool,
  additionalPadding: PropTypes.bool,
};

export default withStyles(styles)(GameGrid);
