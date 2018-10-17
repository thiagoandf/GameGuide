/* eslint-disable jsx-a11y/interactive-supports-focus,jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';
import GameTile from '../GameTile';

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'auto',
    justifyContent: 'center',
  },
});

// eslint-disable-next-line react/prefer-stateless-function
class GameGrid extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div
        style={{
          width: this.props.width || '250px',
          height: this.props.height || '250px',
          padding: this.props.padding || '20px',
        }}
        className={classes.root}
      >
        {this.props.gameList.map(game => (
          <div key={game.name} style={{ padding: '10px' }}>
            <GameTile
              game={game}
              rightButton
              onClick={() => {
                console.log(game.id);
                this.props.onClick(game.id);
              }}
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
  classes: PropTypes.object,
  gameList: PropTypes.array,
  padding: PropTypes.number,
  onClick: PropTypes.func,
};

export default withStyles(styles)(GameGrid);
