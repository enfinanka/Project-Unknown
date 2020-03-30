import React, { useState } from 'react';
import { Header, Icon, Menu, Segment, Sidebar, Image } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LolScreen from "./Screens/LolScreen/LolScreen";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import OverWatchScreen from "./Screens/OverwatchScreen/OverWatchScreen";
import PropTypes from 'prop-types';
import NavBarComponent from "./Components/NavBar/NavBarComponent"

import './App.css';





function App() {


  const [visible, setVisible] = useState(true)




  return (

    <Router>
      <div className="App">
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            className='sideBar'
            as={Menu}
            animation='slide along'
            icon='labeled'
            inverted
            direction='right'
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='wide'
            onClick={() => setVisible(false)}
          >
            <Menu.Item >
              <Image size='tiny' centered src='https://static.coingecko.com/s/halloween/ghost_a_in_dark-19d45e5ab0a77025805542d9f9160a4d784b8fa897b836c88f22463b65761ec5.png' />
              <Header color='grey' size='large'>Ghost Gaming</Header>
            </Menu.Item>
            <Menu.Item as={Link} to='HomeScreen'>
              <Image centered size='tiny' src='https://www.esc.watch/storage/app/uploads/public/594/d3d/5d3/594d3d5d377ea524272878.png' />
          Counter Strike
        </Menu.Item>
            <Menu.Item as={Link} to='LeageOfLegends'>
              <Image centered size='tiny' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/03444932-1ae8-44f5-8035-dbde879dcb75/d6wic5y-bfb90e9a-43fb-44b0-a077-1fe10a7ec1a1.png' />
          Leage of Legends
        </Menu.Item>
            <Menu.Item as={Link} to='OverWatch'>
              <Image centered size='tiny' src='https://cdn.iconscout.com/icon/free/png-256/overwatch-2-569226.png' />
          OverWatch
        </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            <Segment basic>
              <Icon link name='hand spock' size='big' onClick={() => setVisible(true)} />
              <Switch>
                <Route path="/HomeScreen" component={HomeScreen} />
                <Route path="/LeageOfLegends" component={LolScreen} />
                <Route path="/OverWatch" component={OverWatchScreen} />
                <Route path="/" exact component={HomeScreen} />
              </Switch>

            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>

      </div>

    </Router>
    // <div className="app-wrapper">
    //   <div className="app-header">
    //     <h2>GHOST GAMING</h2>
    //   </div>

    //   <div className="app-navbar">

    //   </div>

    //   <div className="app-content">
    //     <HomeScreen></HomeScreen>
    //   </div>
    // </div>
  );
}

export default App;

App.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

