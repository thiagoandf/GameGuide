/**
 * Asynchronously loads the component for HomePage
 */
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index').catch(e => console.log(e)),
  loading: () => null,
});
