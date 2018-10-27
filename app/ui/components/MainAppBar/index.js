import React from 'react';
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  ListSubheader,
  MenuItem,
  Divider,
  IconButton,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
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
              <img alt="Avatar" src={this.props.avatar} />
            </div>
            <Typography variant="caption">{this.props.email}</Typography>
            <ListSubheader>Ir para:</ListSubheader>
            <MenuItem onClick={this.handleGoToRecommendations}>
              Recomendações
            </MenuItem>
            <MenuItem onClick={this.handleGoToGameList}>
              Lista de jogos
            </MenuItem>
            <Divider />
            <MenuItem onClick={this.handleLogout}>Sair</MenuItem>
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
};

export default withStyles(styles)(MainAppBar);
