import React, { Fragment } from 'react'
import './CardComponent.css';
import calendarIcon from '../../assets/images/calendar.png';

export default function CardComponent(props) {
  return (
    <Fragment>
      <div className="cards">
        {props.children}      
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
