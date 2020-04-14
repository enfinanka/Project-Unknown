import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import HomeScreen from './Screens/HomeScreen/HomeScreen'
import './App.css'
import LECScreen from './Screens/LECScreen/LECScreen'
import RioEventScreen from './Screens/RioEventScreen/RioEventScreen'

export default function App() {

  return (
    
    <Router>
      <header className="app-header">
        <h1 style={{marginBottom: '0'}}>Ghost</h1>
        <h1 style={{color: 'yellow', margin: '0'}}>Gaming</h1>
        
        <nav>
          <Link to={'/Home'} className="home-nav-button">Home</Link>
        </nav>

      </header>
      <div>
      <Switch>
        <Route path="/Home" component={HomeScreen} />
        <Route path="/LEC" component={LECScreen} />
        <Route path="/Rio" component={RioEventScreen} />
        <Route path="/" exact component={HomeScreen} />
      </Switch>
      </div>
    </Router>
  )
}
