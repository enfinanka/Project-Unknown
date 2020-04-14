import React, { Component } from 'react'
import './LecInfoComponent.css';

import withHttpRequests from '../../HOCs/withHttpRequest'
import lecInfoImage from '../../assets/images/lecinfoimage.png';
import { Icon } from 'semantic-ui-react'

class LecInfoComponent extends Component {


  render(props) {
    console.log('leccomp', this.props.matches.game)
    return (
      <div>
        <img src={lecInfoImage} class="ui medium rounded image" />
        <div className="info">
        <br />
          <Icon size="big" inverted color='black' name='map marker alternate' />
            <p>{this.props.matches.city}</p>
          <Icon size="big" inverted color='black' name='map marker alternate' />
          <p></p>
          <Icon size="big" inverted color='black' name='map marker alternate' />
          <p></p>
        </div>
        <p>{this.props.matches.description}</p>
      </div>
    )
  }
}


export default withHttpRequests(LecInfoComponent);