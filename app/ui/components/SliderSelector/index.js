import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, Typography } from '@material-ui/core';

import { Slider } from '@material-ui/lab';

const styles = theme => ({
  sliderTrackAfter: {
    backgroundColor: theme.palette.secondary.light,
  },
  sliderThumbSize: {
    width: theme.spacing.qi * 1.6,
    height: theme.spacing.qi * 1.6,
  },
  sliderLabelDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: theme.spacing.qi,
  },
  sliderPadding: {
    padding: '16px 0px 16px 0px',
  },
  inputLabel: {
    color: theme.palette.secondary.light,
  },
  valueLabel: {
    color: theme.palette.secondary.main,
  },
});

class SliderSelector extends React.Component {
  handleChange = (event, value) => {
    this.props.onChange(value);
  };

  render() {
    const { classes } = this.props;

    return (
      <div
        style={{
          margin: this.props.margin ? this.props.margin : '20px',
          width: this.props.width ? this.props.width : '270px',
        }}
      >
        <div className={classes.sliderLabelDiv}>
          <Typography variant="body1" className={classes.inputLabel}>
            {this.props.label}
          </Typography>
          <Typography variant="body1" className={classes.valueLabel}>
            {this.props.value} {this.props.suffix}
          </Typography>
        </div>
        <Slider
          disabled={this.props.disabled}
          step={this.props.steps}
          max={this.props.max}
          min={this.props.min}
          value={this.props.value}
          onChange={this.handleChange}
          classes={{
            trackAfter: classes.sliderTrackAfter,
            thumb: classes.sliderThumbSize,
            root: classes.sliderPadding,
          }}
        />
      </div>
    );
  }
}

SliderSelector.propTypes = {
  width: PropTypes.string,
  margin: PropTypes.string,
  label: PropTypes.string,
  max: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.number,
  classes: PropTypes.object,
  suffix: PropTypes.string,
  min: PropTypes.number,
  steps: PropTypes.number,
  disabled: PropTypes.bool,
};

export default withStyles(styles)(SliderSelector);
