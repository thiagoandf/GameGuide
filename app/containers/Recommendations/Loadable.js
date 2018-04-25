/**
 *
 * Asynchronously loads the component for Recommendations
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
