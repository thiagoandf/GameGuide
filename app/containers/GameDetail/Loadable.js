/**
 *
 * Asynchronously loads the component for GameDetail
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
