import React, { Fragment, useState }  from 'react'
import './RioEventComponent.css';
import calendarIcon from '../../assets/images/calendar.png';

import { Button, Image } from 'semantic-ui-react';


export default function RioEventComponent() {

  const [showTeam, setShowTeam] = useState(true)
  const [showInfo, setShowInfo] = useState(true);
    const [showStanding, setshowStanding] = useState(true);

  return (
    <Fragment>
      <h1>ESL One Rio 2020</h1>
        <div className="button-group">
          <button className="ui tiny inverted button" onClick={() => setShowInfo(!showInfo)}>Information</button>
          <button className="ui tiny inverted button" onClick={() => setShowTeam(!showTeam)}>Teams</button>
          <button className="ui tiny inverted button">Standing</button>
        </div>
      {showInfo === true ? 
      <div className="information">
        <div className="content">
          <Image className="ui large image" src='https://react.semantic-ui.com/images/wireframe/image.png' />
          <h2>Next match</h2>
          <div className="matches"></div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
      :''}
      {showTeam === true ? 
      <div className="Teams">
        <p>team</p>
      </div>
      :''}
      {showStanding === true ? 
      <div className="Teams">
        <p>standing</p>
      </div>
      :''}
    </Fragment>
  )
}
