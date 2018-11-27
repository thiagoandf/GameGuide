import React from 'react';
import PropTypes from 'prop-types';
import { TextField, withStyles, MenuItem } from '@material-ui/core';
import VerticalContainer from '../components/VerticalContainer';
import MainAppBar from '../components/MainAppBar';

const styles = theme => ({
  textField: {
    marginTop: theme.spacing.gg * 5,
    padding: theme.spacing.gg,
    width: '100px',
  },
});

class Reports extends React.Component {
  state = {
    selected: 0,
  };
  componentDidMount() {
    this.props.loadUserInfo();
    this.props.requestCustomerInfo();
  }
  render() {
    const { classes } = this.props;
    return (
      <VerticalContainer>
        <div style={{ maxWidth: '100%', minWidth: '100%', height: '100%' }}>
          <MainAppBar
            goToRecommendations={this.props.goToRecommendations}
            goToGameList={this.props.goToGameList}
            logout={this.props.logout}
            email={this.props.playerEmail}
            avatar={this.props.playerAvatar}
            goToReports={this.props.goToReports}
            reports={this.props.reports.length > 0}
          />
          {Object.keys(this.props.reports).length > 0 && (
            <TextField
              className={classes.textField}
              select
              value={this.state.selected}
              onChange={e => {
                this.setState({
                  selected: e.target.value,
                });
              }}
            >
              {Object.keys(this.props.reports).map(item => (
                <MenuItem key={item} value={item - 1}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          )}
          {Object.keys(this.props.reports).length > 0 && (
            <iframe
              title="Game Guide"
              width="100%"
              height="100%"
              src={
                this.props.reports[
                  Object.keys(this.props.reports)[this.state.selected]
                ]
              }
              frameBorder="0"
              allowFullScreen="true"
            />
          )}
        </div>
      </VerticalContainer>
    );
  }
}

Reports.propTypes = {
  classes: PropTypes.object,
  goToRecommendations: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  goToGameList: PropTypes.func.isRequired,
  goToGameDetail: PropTypes.func.isRequired, // eslint-disable-line
  playerEmail: PropTypes.string,
  playerAvatar: PropTypes.string,
  loadUserInfo: PropTypes.func,
  requestCustomerInfo: PropTypes.func,
  goToReports: PropTypes.func,
  reports: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default withStyles(styles)(Reports);
