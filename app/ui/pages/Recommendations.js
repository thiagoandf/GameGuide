import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import VerticalContainer from '../components/VerticalContainer';
import MainAppBar from '../components/MainAppBar';
import GameGrid from '../components/GameGrid';

const styles = theme => ({
  profileImage: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileEmail: {
    paddingTop: theme.spacing.gg * 2,
  },
  recommendationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.gg * 2,
    flexDirection: 'column',
    width: '100%',
  },
  sectionTitles: {
    fontWeight: theme.typography.body1.fontWeight,
  },
});

class Recommendations extends React.Component {
  componentDidMount() {
    this.props.requestGameList();
    this.props.requestRecommendations();
    this.props.loadUserInfo();
  }
  render() {
    const { classes } = this.props;
    return (
      <VerticalContainer>
        <div style={{ maxWidth: '100%', minWidth: '100%' }}>
          <MainAppBar
            goToRecommendations={this.props.goToRecommendations}
            goToGameList={this.props.goToGameList}
            logout={this.props.logout}
            email={this.props.playerEmail}
            avatar={this.props.playerAvatar}
          />
          <Typography />
          <div className={classes.profileImage}>
            <img alt="Avatar" src={this.props.playerAvatar} width="100px" />
            <Typography variant="headline" className={classes.profileEmail}>
              {this.props.playerEmail}
            </Typography>
          </div>
          <div className={classes.recommendationWrapper}>
            <Typography variant="subheading" className={classes.sectionTitles}>
              Recomendações
            </Typography>
            <div
              style={{
                width: '100%',
                borderBottomColor: '#c4c4c4',
                borderBottomWidth: '1px',
                borderBottomStyle: 'solid',
              }}
            />
            <GameGrid
              gameList={this.props.recommendedGames}
              width="90%"
              maxWidth="560px"
              height="125px"
              onClick={game => {
                console.log(game); /* eslint-disable-line no-console */
              }}
            />
          </div>
          <div className={classes.recommendationWrapper}>
            <Typography variant="subheading" className={classes.sectionTitles}>
              Tenho
            </Typography>
            <div
              style={{
                width: '100%',
                borderBottomColor: '#c4c4c4',
                borderBottomWidth: '1px',
                borderBottomStyle: 'solid',
              }}
            />
            <GameGrid
              gameList={this.props.recommendedGames}
              width="90%"
              maxWidth="560px"
              height="125px"
              onClick={game => {
                console.log(game); /* eslint-disable-line no-console */
              }}
            />
          </div>
        </div>
      </VerticalContainer>
    );
  }
}

Recommendations.propTypes = {
  classes: PropTypes.object,
  recommendedGames: PropTypes.array,
  requestGameList: PropTypes.func.isRequired,
  requestRecommendations: PropTypes.func.isRequired,
  goToRecommendations: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  goToGameList: PropTypes.func.isRequired,
  goToGameDetail: PropTypes.func.isRequired, // eslint-disable-line
  playerEmail: PropTypes.string,
  playerAvatar: PropTypes.string,
  loadUserInfo: PropTypes.func,
};

export default withStyles(styles)(Recommendations);
