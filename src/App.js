import React from 'react';

import './App.css';
import HomeScreen from './Screens/HomeScreen/HomeScreen'


function App() {
  return (
    <div className="app-wrapper">
      <div className="app-header">
        <p>GHOST GAMING</p>
      </div>

      <div className="app-navbar">

      </div>

      <div className="app-content">
        <HomeScreen></HomeScreen>
      </div>
    </div>
  );
}

export default App;
