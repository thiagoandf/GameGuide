/**
 * Test injectors
 */

import { memoryHistory } from 'react-router-dom';
import identity from 'lodash/identity';

import configureStore from '../../configureStore';

import getInjectors, { injectReducerFactory } from '../reducerInjectors';

// Fixtures

const initialState = { reduced: 'soon' };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return state.set('reduced', action.payload);
    default:
      return state;
  }
};

describe('reducer injectors', () => {
  let reduxStore;
  let injectReducer;

  describe('getInjectors', () => {
    beforeEach(() => {
      const { store } = configureStore({}, memoryHistory);
      reduxStore = store;
    });

    it('should return injectors', () => {
      expect(getInjectors(reduxStore)).toEqual(
        expect.objectContaining({
          injectReducer: expect.any(Function),
        }),
      );
    });

    it('should throw if passed invalid store shape', () => {
      Reflect.deleteProperty(reduxStore, 'dispatch');

      expect(() => getInjectors(reduxStore)).toThrow();
    });
  });

  describe('injectReducer helper', () => {
    beforeEach(() => {
      reduxStore = configureStore({}, memoryHistory);
      injectReducer = injectReducerFactory(reduxStore, true);
    });

    it('should check a store if the second argument is falsy', () => {
      const inject = injectReducerFactory({});

      expect(() => inject('test', reducer)).toThrow();
    });

    it('it should not check a store if the second argument is true', () => {
      Reflect.deleteProperty(reduxStore, 'dispatch');

      expect(() => injectReducer('test', reducer)).not.toThrow();
    });

    it("should validate a reducer and reducer's key", () => {
      expect(() => injectReducer('', reducer)).toThrow();
      expect(() => injectReducer(1, reducer)).toThrow();
      expect(() => injectReducer(1, 1)).toThrow();
    });

    it('given a store, it should provide a function to inject a reducer', () => {
      injectReducer('test', reducer);

      const actual = reduxStore.getState().get('test');
      const expected = initialState;

      expect(actual).toEqual(expected);
    });

    it('should not assign reducer if already existing', () => {
      reduxStore.replaceReducer = jest.fn();
      injectReducer('test', reducer);
      injectReducer('test', reducer);

      expect(reduxStore.replaceReducer).toHaveBeenCalledTimes(1);
    });

    it('should assign reducer if different implementation for hot reloading', () => {
      reduxStore.replaceReducer = jest.fn();
      injectReducer('test', reducer);
      injectReducer('test', identity);

      expect(reduxStore.replaceReducer).toHaveBeenCalledTimes(2);
    });
  });
});
