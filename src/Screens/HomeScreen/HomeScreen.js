import React from 'react'

import ESLbg from '../../assets/images/ESLBG.jpg'
import RIObg from '../../assets/images/RioBG.jpg'

import './HomeScreen.css'
import EventComponent from '../../Components/EventComponent/EventComponent';
import withHttpRequest from '../../HOCs/withHttpRequest'

function HomeScreen() {

  return (
    <div className="homescreen-wrapper">
      <EventComponent topPosition={'80vh'} leftPosition={'20vw'} btnColor="yellow" linkUrl={'/LEC'} >
        <img src={ESLbg} alt="ESL Pro League" className="event-image" />
      </EventComponent>

      <EventComponent topPosition={'80vh'} leftPosition={'71.5vw'} btnColor="yellow" linkUrl={'/Rio'}>
        <img src={RIObg} alt="Rio BG" className="event-image"/>
      </EventComponent>
    </div>
  )
}

export default withHttpRequest(HomeScreen);
