import React, { Fragment } from 'react';

import './App.css';
import HomeScreen from './Screens/HomeScreen/HomeScreen'


function App() {
  return (
    <Fragment>
      <div className="app-header">
        <h2>GHOST GAMING</h2>
      </div>

      <div className="app-navbar">

      </div>

      <div className="app-wrapper">
        <div className="app-content">
          <HomeScreen></HomeScreen>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
