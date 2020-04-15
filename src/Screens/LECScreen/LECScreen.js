import React, { Component } from 'react'

import { Card, Header, Image, Button } from 'semantic-ui-react';
import './LECScreen.css'
import withHttpRequests from '../../HOCs/withHttpRequest';
import StandingsComponent from '../../Components/StandingsComponent/StandingsComponent'

class LECScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
      rosters: [],
      activePage: 'Information'
    }
    this.upcomingMatches();
  }

  upcomingMatches = () => {
    this.props.getTournaments()
      .then(res => {

        this.setState({ matches: res })
        this.setState({ rosters: res.next_series.rosters })
      })
  }

  changeContent = (e) => {
    switch(e.target.id) {
      case '1':
        this.setState({ activePage: 'Information' })
        break;
      case '2':
        this.setState({ activePage: 'Teams' })
        break;
      case '3':
        this.setState({ activePage: 'Standings' })
        break;
    }
  }

  render() {
    const { matches, rosters, activePage } = this.state

    return (
      <div className="lec-screen-wrapper">
        <div className="content-wrapper">
          <div className="content-header">
            <img src={matches.images && matches.images.banner} />
          </div>

          <div className="sub-navbar">
            <Button size="medium" id="1" basic color='black' onClick={this.changeContent}>Information</Button>
            <Button size="medium" id="2" basic color='black' onClick={this.changeContent}>Teams</Button>
            <Button size="medium" id="3" basic color='black' onClick={this.changeContent}>Standings</Button>
          </div>

          <div className="next-match-wrapper">
            <h1 style={{marginBottom: '0px'}}>Next Match</h1>
            <Header sub size='huge' textAlign='center'>
              {matches.next_series && matches.next_series.start}
            </Header>
          
            <Card>
              <Card.Content>
                <Header textAlign='center'>
                {rosters[0] && rosters[1].teams[0].short_name}
                <Image spaced="right" size='massive' src={rosters[1] && rosters[1].teams[0].images.default} />
                  VS
                <Image spaced="left" size='massive' src={rosters[0] && rosters[0].teams[0].images.default} />
                {rosters[0] && rosters[0].teams[0].short_name}
                </Header>
              </Card.Content>
            </Card>
        </div>

        <div className="main-content">
          {activePage === 'Standings' && 
          <StandingsComponent />
          }
        </div>
      </div>
    </div>
    )
  }
}
export default withHttpRequests(LECScreen);