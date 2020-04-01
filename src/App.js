import React, { useState, } from 'react';
import { Header, Icon, Menu, Sidebar, Image, } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import PropTypes from 'prop-types';
import TeamScreen from './Screens/Teams/TeamScreen';
import EventScreen from './Screens/Events/EventScreen';
import NavBar from './Components/NavBar/NavBarComponent'


import './App.css';

function App() {


  const [visible, setVisible] = useState(false)

  return (
    <Router>
      <NavBar visible={visible} setVisible={setVisible} />
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          direction='right'
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width='wide'
          onClick={() => setVisible(false)}
        >
          <div className='test2'>
            <Menu.Item  >
              <Image size='tiny' centered src='https://static.coingecko.com/s/halloween/ghost_a_in_dark-19d45e5ab0a77025805542d9f9160a4d784b8fa897b836c88f22463b65761ec5.png' />
              <h1>Ghost Gaming</h1>
            </Menu.Item>
            <Menu.Item as={Link} to='Home'>
              <Header textAlign='left' inverted color='grey' ><Icon name='eject' size='tiny' />Home</Header>

            </Menu.Item>
            <Menu.Item as={Link} to='Events'>
              <Header textAlign='left' inverted color='grey'><Icon name="globe" size='tiny' />Events</Header>

            </Menu.Item>
            <Menu.Item as={Link} to='Teams'>
              <Header textAlign='left' inverted color='grey'><Icon name="users" size='tiny' />Teams</Header>
            </Menu.Item>
          </div>
        </Sidebar>
        <Sidebar.Pusher dimmed={visible}>
          <div className="app-wrapper">
            <div className="app-content">
              <Switch>
                <Route path="/Home" component={HomeScreen} />
                <Route path="/Teams" component={TeamScreen} />
                <Route path="/Events" component={EventScreen} />
                <Route path="/" exact component={HomeScreen} />
              </Switch>
            </div>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Router>
  );
}

export default App;

App.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

