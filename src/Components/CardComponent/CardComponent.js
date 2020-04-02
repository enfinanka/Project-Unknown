import React, { Fragment } from 'react'
import './CardComponent.css';
import calendarIcon from '../../assets/images/calendar.png';

import { Image } from 'semantic-ui-react';


export default function CardComponents() {
  return (
    <Fragment>
      <div className="cards">
        <Image className="eventImage" src='https://react.semantic-ui.com/images/wireframe/image.png' />        
        <div className="eventText">
          <h3 style={{marginBottom: '5px'}} >Lorem Impusm</h3>
          <img src={calendarIcon} />
          <h5 style={{marginTop: '0px'}} >14 Feb 2020</h5>
          <p>Lorem Impusm Lorem Impusm Lorem Impusm Lorem Impusm </p>
          <button className="ui inverted yellow button">Read More</button>
        </div>
      </div>
    </Fragment>
  )
}
