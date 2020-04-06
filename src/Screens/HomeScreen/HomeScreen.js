import React from 'react'

import ESLbg from '../../assets/images/ESLBG.jpg'
import RIObg from '../../assets/images/RioBG.jpg'
import ghostLogo from '../../assets/images/oneGhost.png'


import './HomeScreen.css'
import EventComponent from '../../Components/EventComponent/EventComponent';

export default function HomeScreen() {

  return (
    <div className="homescreen-wrapper">
      <header>
        <div className="logo">
          <h1 className="ghost-heading" style={{fontFamily: 'Geometria', marginTop: '0'}}>Ghost</h1>
          <h1 className="ghost-heading" style={{fontFamily: 'Geometria', color: 'white', marginTop: '0'}}>Gaming</h1>
        </div>
      </header>

      <nav>
        <h3>Menu</h3>
      </nav>

      <EventComponent topPosition={'75vh'} leftPosition={'20vw'} btnColor="yellow">
        <img src={ESLbg} alt="ESL Pro League" className="event-image"/>
      </EventComponent>

      <EventComponent topPosition={'75vh'} leftPosition={'71.5vw'} btnColor="yellow">
        <img src={RIObg} alt="Rio BG" className="event-image"/>
      </EventComponent>
    </div>
  )
}
