import React from 'react';

import './App.css';
import HomeScreen from './Screens/HomeScreen/HomeScreen'


function App() {
  return (
    <div className="app-wrapper">
      <div className="app-header">
        <h2>GHOST GAMING</h2>
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
