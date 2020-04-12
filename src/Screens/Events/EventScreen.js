import React, { Component } from 'react'
import { Card, Header } from 'semantic-ui-react';

import withHttpRequests from '../../HOCS/withHttpRequests';
import MatchComponent from '../../Components/MatchComponent/MatchComponent';



class EventScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
      rosters: []

    }
    this.matches();
  }

  matches = async () => {
    this.props.getMatches()
      .then(res => {
        console.log(res);

        this.setState({ matches: res })
        this.setState({ rosters: res.next_series.rosters })


      })
  }
  render() {


    

    return (
      <div >
        <Header size='large' inverted textAlign='center'>{this.state.matches.next_series && this.state.matches.next_series.title}</Header>
        <Header inverted textAlign='center'>{this.state.matches.next_series && this.state.matches.next_series.start}</Header>

        <Card.Group centered>
          {this.state.rosters.map((team, i) => (<MatchComponent key={i} team={this.state.rosters[i]} />))}
        </Card.Group>



      </div>
    )
  }
}
export default withHttpRequests(EventScreen);