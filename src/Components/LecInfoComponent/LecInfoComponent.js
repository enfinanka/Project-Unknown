import React, { Component, Fragment } from 'react'

import withHttpRequests from '../../HOCs/withHttpRequest'
<<<<<<< HEAD
import { Icon } from 'semantic-ui-react'
import lecInfoImage from '../../assets/images/lecinfoimage.png';


 function LecInfoComponent(props) {
  const { matches } = props;
=======
import './LecInfoComponent.css';

/**
 * @desc 
 * @author Elin
 */

class LecInfoComponent extends Component {
>>>>>>> 56c953360ec52eb15b8c755d5a756a92fac2b051

    console.log('leccomp', matches)
    return (

      <Fragment>
        <img src={lecInfoImage} class="ui large rounded image" />
        <div className="info">
          <Icon className="info-icon" size="large" inverted color='black' name='map marker alternate' />
          <p className="tournament-ptag">{matches.country && matches.country.name}</p>
          <p className="space-api">, </p>
          <p className="tournament-ptag berlin ">{matches.city}</p>
          <Icon size="large" inverted color='black' name='users' />
          <p className="tournament-ptag first-number">{matches.game && matches.game.default_lineup_size}</p>
          <p className="space-api-vs">VS</p>
          <p className="tournament-ptag">{matches.game && matches.game.default_lineup_size}</p>
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html:  matches.description
          }}
        />
      </Fragment>
    )
  }


export default withHttpRequests(LecInfoComponent);