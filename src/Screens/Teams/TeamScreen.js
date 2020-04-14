import React, { Component, Fragment } from 'react'

import './TeamScreen.css'
import withHttpRequests from '../../HOCs/withHttpRequest';
import TeamComponent from '../../Components/TeamComponent/TeamComponent'
import { Card } from 'semantic-ui-react';

class TeamScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Teams: [],
    }
    this.tournamentTeams();
  }

  tournamentTeams = () => {
    this.props.getTeams(2, 4244, 1)
      .then(res => {
        this.setState({
          Teams: [...res.data]
        })

      })
  }

  render() {
    console.log(this.state.Teams);

    return (
      <Fragment >
        <Card.Group centered >
          {this.state.Teams.map((team, i) => (<TeamComponent key={i} team={this.state.Teams[i]} />))}
        </Card.Group>
      </Fragment>


    )
  }
}
export default withHttpRequests(TeamScreen);