/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import languageProviderReducer from 'containers/LanguageProvider/reducer';

import domainReducer from './domain/reducer';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
};

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 
 */
// Initial routing state
const routeInitialState = {
  location: null,
};

/**
 * Merge route into the global application state
 */
export function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return { ...state, location: action.payload };
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    language: languageProviderReducer,
    domain: domainReducer,
    ...injectedReducers,
  });
}

/**
 * Persists main reducer
 */
export default function createPersistedReducer(injectedReducers) {
  return persistReducer(persistConfig, createReducer(injectedReducers));
}
