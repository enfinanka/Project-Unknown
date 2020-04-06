import React, { Component } from 'react'

import withHttpRequests from '../../HOCS/withHttpRequests';

class TeamScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.props.getData('games?', this.sendDataFunc)
  }

  sendDataFunc = (data) => {
    console.log(data)
  }

  render() {

    return (
      <div>

      </div>
    )
  }
}
export default withHttpRequests(TeamScreen);