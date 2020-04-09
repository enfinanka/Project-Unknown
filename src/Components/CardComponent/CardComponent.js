import React, { Fragment } from 'react'
import './CardComponent.css';
import calendarIcon from '../../assets/images/calendar.png';


export default function CardComponent(props) {
  return (
    <Fragment>
      <div className="cards">
        <div className="eventText">
          <h3 style={{ marginBottom: '5px' }} >Teams</h3>
          <img src={calendarIcon} alt='pic' />
          <h5 style={{ marginTop: '0px' }} >14 Feb 2020</h5>
          {props.children}
          <button className="ui inverted yellow button">hepp</button>
        </div>
      </div>
    </Fragment>
  )
}
