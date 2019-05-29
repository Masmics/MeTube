import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import VideoPage from '../containers/videos/PlayVideo';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={VideoPage} />
        </Switch>
      </Router>
    </>
  );
}

