import React from 'react'

import LECbg from '../../assets/images/LECbg.jpg'
import RIObg from '../../assets/images/RioBG.jpg'

import './HomeScreen.css'
import EventComponent from '../../Components/EventComponent/EventComponent';
import withHttpRequest from '../../HOCs/withHttpRequest'

/**
 * @desc Renders the Home Screen, the EventComponent are the two big images appearing on the frontpage.
 * @author Ted, Elin
 */

function HomeScreen() {

  return (
    <div className="homescreen-wrapper">
      <EventComponent topPosition={'75vh'} leftPosition={'20vw'} btnColor="yellow" linkUrl={'/LEC'} >
        <img src={LECbg} alt="ESL Pro League" className="event-image" />
      </EventComponent>

      <EventComponent topPosition={'75vh'} leftPosition={'71.5vw'} btnColor="yellow" linkUrl={'/Rio'}>
        <img src={RIObg} alt="Rio BG" className="event-image"/>
      </EventComponent>
    </div>
  )
}

export default withHttpRequest(HomeScreen);
