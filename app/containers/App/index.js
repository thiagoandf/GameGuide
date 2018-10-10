import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GameList from 'containers/GameList/Loadable';
import Recommendations from 'containers/Recommendations/Loadable';
import GameDetail from 'containers/GameDetail/Loadable';
import Signup from 'containers/Signup/Loadable';
import SignupExperience from 'containers/SignupExperience';
import SignupAvatar from '../../containers/SignupAvatar/Loadable';
import ReportPage from '../ReportPage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/games" component={GameList} />
        <Route path="/recommendations" component={Recommendations} />
        <Route path="/game/:id" component={GameDetail} />
        <Route path="/signup" component={Signup} />
        <Route path="/report" component={ReportPage} />
        <Route path="/avatar" component={SignupAvatar} />
        <Route path="/experience" component={SignupExperience} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
