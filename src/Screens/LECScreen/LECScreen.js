import React, { Component } from 'react'
import { Card, Header, Image, Button } from 'semantic-ui-react';
import './LECScreen.css'

import withHttpRequests from '../../HOCs/withHttpRequest';
import LecInfoComponent from '../../Components/LecInfoComponent/LecInfoComponent';

class LECScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
      rosters: [],
      buttons: {
        informationIsActive: true,
        teamsIsActive: false,
        standingsIsActive: false
      }
    }
    this.upcomingMatches();
  }

  upcomingMatches = () => {
    this.props.getMatches()
      .then(res => {
        console.log(res);

        this.setState({ matches: res })
        this.setState({ rosters: res.next_series.rosters })
      })
  }

  render() {

    return (
      <div className="lec-screen-wrapper">
        <div className="content-wrapper">
          <div className="content-header">
            <img src={this.state.matches.images && this.state.matches.images.banner} />
          </div>
          <LecInfoComponent></LecInfoComponent>
          <div className="sub-navbar">
            <Button size="medium" basic color='black'>Information</Button>
            <Button size="medium" basic color='black'>Teams</Button>
            <Button size="medium" basic color='black'>Standings</Button>
          </div>

          <div className="next-match-wrapper">
            <h2 style={{marginBottom: '0px'}}>Next Match</h2>
            <Header sub size='huge' textAlign='center'>
              <p>{this.state.matches.next_series && this.state.matches.next_series.start}</p>
            </Header>
          
            <Card>
              <Card.Content>
                <Header textAlign='center'>
                {this.state.rosters[0] && this.state.rosters[1].teams[0].short_name}
                <Image spaced="right" size='massive' src={this.state.rosters[1] && this.state.rosters[1].teams[0].images.default} />
                  VS
                <Image spaced="left" size='massive' src={this.state.rosters[0] && this.state.rosters[0].teams[0].images.default} />
                {this.state.rosters[0] && this.state.rosters[0].teams[0].short_name}
                </Header>
              </Card.Content>
            </Card>
          {/* <Card.Group centered>
            {this.state.rosters.map((team, i) => (<MatchComponent key={i} team={this.state.rosters[i]} />))}
          </Card.Group> */}
        </div>
        <div className="main-content">
          <p></p>
        </div>
      </div>
    </div>
    )
  }
}
export default withHttpRequests(LECScreen);