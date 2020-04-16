import React, { Component, Fragment } from 'react'
import './LecInfoComponent.css';

import withHttpRequests from '../../HOCs/withHttpRequest'
import { Icon } from 'semantic-ui-react'

class LecInfoComponent extends Component {


  render(props) {
    // console.log('leccomp', this.props.matches.country && this.props.matches.contry.region)
    return (
      <Fragment>
          <div className="info">
            {/* <Icon size="big" inverted color='black' name='map marker alternate' />
              <p>{this.props.matches.city }</p>
            <Icon size="big" inverted color='black' name='map marker alternate' />
            <p></p>
            <Icon size="big" inverted color='black' name='map marker alternate' />
            <p></p> */}
          </div>
          {/* {this.props.matches.description} */}
      </Fragment>
    )
  }
}


export default withHttpRequests(LecInfoComponent);