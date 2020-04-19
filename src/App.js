import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import HomeScreen from './Screens/HomeScreen/HomeScreen'
import './App.css'
import LECScreen from './Screens/LECScreen/LECScreen'
import RioEventScreen from './Screens/RioEventScreen/RioEventScreen'
import ghostLogo from './assets/images/oneGhost.png'

/**
 * @desc Sets up the routing for the application.
 * @author Ted, Joel
 */

export default function App() {

  return (

    <Router>
      <header className="app-header">
        <img src={ghostLogo} alt="logo" />
        <h1 style={{ margin: '0' }}>Ghost</h1>
        <h1 style={{ color: 'yellow', margin: '0' }}>Gaming</h1>

        <nav>
          <Link to={'/Home'} className="home-nav-button">Home</Link>
        </nav>

      </header>
      <Fragment>
        <Switch>
          <Route path="/Home" component={HomeScreen} />
          <Route path="/LEC" component={LECScreen} />
          <Route path="/Rio" component={RioEventScreen} />
          <Route path="/" exact component={HomeScreen} />
        </Switch>
      </Fragment>
    </Router>
  )
}
