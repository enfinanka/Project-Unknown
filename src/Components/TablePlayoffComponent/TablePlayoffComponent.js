import React, { Component, Fragment } from 'react'
import { Card } from 'semantic-ui-react';

import withHttpRequests from '../../HOCs/withHttpRequest';
import MatchComponent from '../MatchComponent/MatchComponent'

class TablePlayoffComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      matches: [],
      rosters: []
    }

    this.fetchRosters();
  }

  fetchRosters = () => {
    this.props.getTournaments()
    .then(res => {
      this.setState({ matches: res })
      this.setState({ rosters: res.next_series.rosters })
      console.log(this.state)
    })
  }


  render() {
    const { matches, rosters } = this.state

    return (
      <Fragment>
        <h2>Semi-Final</h2>
        {matches.next_series && matches.next_series.start}
        <Card.Group centered>
          {rosters.map((team, i) => (<MatchComponent key={i} team={rosters[i]} />))}
        </Card.Group>
      </Fragment>
    )
  }
}

export default withHttpRequests(TablePlayoffComponent)
