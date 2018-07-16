import languageProviderReducer from '../../../state/language/reducer';
import { CHANGE_LOCALE } from '../../../state/language/constants';

describe('languageProviderReducer', () => {
  it('returns the initial state', () => {
    expect(languageProviderReducer(undefined, {})).toEqual({
      locale: 'pt',
    });
  });

  it('changes the locale', () => {
    expect(
      languageProviderReducer(undefined, {
        type: CHANGE_LOCALE,
        locale: 'de',
      }),
    ).toEqual({
      locale: 'de',
    });
  });
});
