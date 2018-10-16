/* eslint-disable jsx-a11y/interactive-supports-focus,jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, Typography, IconButton } from '@material-ui/core';

import { FavoriteBorder, Favorite } from '@material-ui/icons';

const styles = theme => ({
  imageWrapper: {
    width: '100%',
  },
  gameName: {
    backgroundColor: theme.palette.common.white,
    zIndex: 199,
    position: 'absolute',
    height: '30px',
    paddingTop: '5px',
    paddingLeft: '10px',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.16)',
  },
  iconButton: {
    zIndex: 199,
    position: 'absolute',
    right: '-5px',
  },
});

// eslint-disable-next-line react/prefer-stateless-function
class GameTile extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div
        style={{
          width: `${this.props.width || 125}px`,
          height: `${this.props.height || 125}px`,
          position: 'relative',
        }}
      >
        <div
          role="button"
          className={classes.imageWrapper}
          onClick={() => {
            this.props.onView();
          }}
        >
          <img
            src={this.props.game.coverImage}
            alt={this.props.game.name}
            width={`${this.props.width || 125}px`}
            height={`${this.props.height || 125}px`}
          />
        </div>
        <div
          className={classes.gameName}
          style={{
            top: `${this.props.height - 30 || 95}px`,
            width: `${this.props.width || 125}px`,
          }}
        >
          <Typography variant="body1">{this.props.game.name}</Typography>
        </div>
        {this.props.rightButton && (
          <IconButton
            className={classes.iconButton}
            style={{
              top: `${this.props.height - 30 || 85}px`,
            }}
            onClick={() => {
              this.props.onClick();
            }}
          >
            {this.props.game.likes ? (
              <Favorite style={{ fill: '#F16567' }} />
            ) : (
              <FavoriteBorder />
            )}
          </IconButton>
        )}
      </div>
    );
  }
}

GameTile.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  classes: PropTypes.object,
  game: PropTypes.object,
  rightButton: PropTypes.bool,
  onClick: PropTypes.func,
  onView: PropTypes.func,
};

export default withStyles(styles)(GameTile);
