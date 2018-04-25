import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GameList from 'containers/GameList/Loadable';
import Recommendations from 'containers/Recommendations/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/games" component={GameList} />
        <Route path="/recommendations" component={Recommendations} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
