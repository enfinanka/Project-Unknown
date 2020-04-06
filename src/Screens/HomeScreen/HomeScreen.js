import React from 'react'

import ESLbg from '../../assets/images/ESLBG.jpg'
import RIObg from '../../assets/images/RioBG.jpg'


import './HomeScreen.css'
import EventComponent from '../../Components/EventComponent/EventComponent';

export default function HomeScreen() {

  return (
    <div className="homescreen-wrapper">
      <EventComponent top={'75vh'} left={'22vw'}>
        <img src={ESLbg} alt="ESL Pro League" className="event-image"/>
      </EventComponent>

      <EventComponent top={'75vh'} left={'72vw'}>
        <img src={RIObg} alt="Rio BG" className="event-image"/>
      </EventComponent>
      
      {/* <div className="rio-event">
        <img src={RIObg} alt="ESL Pro League"/>
        <Button inverted color='yellow' className="readmore-button">
          Read More
        </Button>
      </div> */}
    </div>
  )
}
