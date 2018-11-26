import React from 'react';
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  MenuItem,
  Divider,
  IconButton,
  ButtonBase,
} from '@material-ui/core';
import { Close, List, ExitToApp } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

const styles = theme => ({
  appBar: {
    backgroundColor: theme.palette.primary.main,
    top: 0,
  },
  drawer: {
    width: '250px',
    backgroundColor: theme.palette.common.white,
    height: '100%',
  },
  avatarWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

class MainAppBar extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = { open: false };
  }
  handleToggle = () => this.setState({ open: !this.state.open });

  handleGoToRecommendations = () => {
    this.setState({ open: false });
    this.props.goToRecommendations();
  };

  handleGoToGameList = () => {
    this.setState({ open: false });
    this.props.goToGameList();
  };

  handleGoToReports = () => {
    this.setState({ open: false });
    this.props.goToReports();
  };

  handleLogout = () => {
    this.setState({ open: false });
    this.props.logout();
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Game Guide
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.open} onClose={this.handleToggle}>
          <div className={classes.drawer}>
            <IconButton
              onClick={this.handleToggle}
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '100%',
                padding: '10px',
              }}
            >
              <Close />
            </IconButton>
            <div className={classes.avatarWrapper}>
              <img
                alt="Avatar"
                width="125px"
                height="125px"
                src={this.props.avatar}
              />
            </div>
            <div className={classes.avatarWrapper}>
              <Typography variant="title" style={{ paddingTop: '5px' }}>
                {this.props.email}
              </Typography>
              <ButtonBase onClick={this.handleGoToRecommendations}>
                <Typography variant="caption" style={{ paddingTop: '5px' }}>
                  Ver Perfil
                </Typography>
              </ButtonBase>
            </div>
            <MenuItem
              onClick={this.handleGoToGameList}
              style={{ paddingTop: '20px' }}
            >
              <List />
              <Typography variant="body1" style={{ paddingLeft: '5px' }}>
                Lista de jogos
              </Typography>
            </MenuItem>
            {this.props.reports && (
              <MenuItem
                onClick={this.handleGoToReports}
                style={{ paddingTop: '20px' }}
              >
                <List />
                <Typography variant="body1" style={{ paddingLeft: '5px' }}>
                  Relatórios
                </Typography>
              </MenuItem>
            )}
            <Divider style={{ marginTop: '5px', marginBottom: '5px' }} />
            <MenuItem onClick={this.handleLogout}>
              <ExitToApp />
              <Typography variant="body1" style={{ paddingLeft: '5px' }}>
                Sair
              </Typography>
            </MenuItem>
          </div>
        </Drawer>
      </React.Fragment>
    );
  }
}

MainAppBar.propTypes = {
  email: PropTypes.string,
  avatar: PropTypes.string,
  goToRecommendations: PropTypes.func.isRequired,
  goToGameList: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  classes: PropTypes.object,
  reports: PropTypes.object,
  goToReports: PropTypes.func,
};

export default withStyles(styles)(MainAppBar);
