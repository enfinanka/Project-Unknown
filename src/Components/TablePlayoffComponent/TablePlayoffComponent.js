import React, { Component } from 'react'
import { Card } from 'semantic-ui-react';
import withHttpRequests from '../../HOCs/withHttpRequest';
import MatchComponent from '../MatchComponent/MatchComponent'

import './TablePlayoffComponent.css'

/**
 * @desc Renders the next playoff game.
 * @author Ted
 */

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
    this.props.getTournaments(4244)
    .then(res => {
      this.setState({ matches: res })
      this.setState({ rosters: res.next_series.rosters })
    })
  }


  render() {
    const { matches, rosters } = this.state

    return (
      <div className="standings-wrapper">
        <h2>{matches.next_series && matches.next_series.title}</h2>
        {matches.next_series && matches.next_series.start}
        <Card.Group centered>
          {rosters.map((team, i) => (<MatchComponent key={i} team={rosters[i]} />))}
        </Card.Group>
      </div>
    )
  }
}

export default withHttpRequests(TablePlayoffComponent)
