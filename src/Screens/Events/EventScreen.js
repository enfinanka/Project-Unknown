import React, { Component } from 'react'

import withHttpRequests from '../../HOCS/withHttpRequests';
import RioEventComponent from '../../Components/RioEvent/RioEventComponent';

class EventScreen extends Component {
  render() {
    
    return (
      <div>
        <RioEventComponent></RioEventComponent>
      </div>
    )
  }
}
export default withHttpRequests(EventScreen);