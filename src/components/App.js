import React from 'react';
import VideoForm from './video/VideoForm';

import {
  BrowserRouter as Router//,
  // Switch,
  // Route
} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <div>
          <h1>Hello from App</h1>
          <h2>And hello from VideoForm</h2>
          <VideoForm value="-UoeQOC-5iw" />
        </div>
      </Router>

    </>
  );
}

