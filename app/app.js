/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import {
  MuiThemeProvider,
  CssBaseline,
  createMuiTheme,
} from '@material-ui/core';
import { orange, amber } from '@material-ui/core/colors';

import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./ui/images/favicon.ico';
import 'file-loader?name=[name].[ext]!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */

import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

import { loadState, saveState } from './localStorage';

// Import CSS reset and Global Styles
import './global-styles';

// Create redux store with history
const persistedState = loadState();
const history = createHistory();
const store = configureStore(persistedState, history);
store.subscribe(() => saveState(store.getState()));

const MOUNT_NODE = document.getElementById('app');

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#2E492A',
      main: '#3C5B37',
      light: '#537A4D',
    },
    secondary: {
      dark: '#1A2129',
      main: '#313F4C',
      light: '#495D6D',
    },
    ggRed: {
      dark: '#B85047',
      main: '#D95C56',
      light: '#F16567',
    },
    ggBrown: {
      dark: '#3D271C',
      main: '#5B3A2C',
      light: '#774C3E',
    },
    ggGrey: {
      dark: '#5F6A76',
      main: '#798793',
      light: '#95A6B2',
    },
    ggYellow: {
      dark: '#FDCA73',
      main: '#F7D4A1',
      light: '#FBE8D2',
    },
  },
  typography: {
    fontSize: 14,
  },
});

const render = messages => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </MuiThemeProvider>
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
