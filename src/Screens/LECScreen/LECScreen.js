import React, { Component } from 'react'
import { Card, Header, Image, Button } from 'semantic-ui-react';
import './LECScreen.css'


import TeamComponent from '../../Components/TeamComponent/TeamComponent'
import withHttpRequests from '../../HOCs/withHttpRequest';




class LECScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
      rosters: [],
      Teams: [],
      buttons: {
        informationIsActive: true,
        teamsIsActive: false,
        standingsIsActive: false
      }
    }
    this.upcomingMatches();
  }

  tournamentTeams = () => {
    this.props.getTeams(2, 4244, 1)
      .then(res => {
        this.setState({
          Teams: [...res.data]
          
        })
      })
  }

  upcomingMatches = () => {
    this.props.getTournaments()
      .then(res => {

        this.setState({ matches: res })
        this.setState({ rosters: res.next_series.rosters })


      })
  }
  render() {

    return (
      <div className="lec-screen-wrapper">
        <img alt='background' src='https://cdn.shopify.com/s/files/1/0070/6661/5861/files/Featured_product_backgroud_image_1800x.jpg?v=1552502823' />
        <div className="content-wrapper">
          <div className="content-header">
            <img alt='banner' src={this.state.matches.images && this.state.matches.images.banner} />
          </div>

          <div className="sub-navbar">
            <Button size="medium" color='black'>Information</Button>
            <Button onClick={(() => this.tournamentTeams())} size="medium" color='black'>Teams</Button>
            <Button size="medium" color='black'>Standings</Button>
          </div>

          <div className="next-match-wrapper">
            <h1 style={{ marginBottom: '0px' }}>Next Match</h1>
            <Header sub size='huge' textAlign='center'>
              {this.state.matches.next_series && this.state.matches.next_series.start}
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
          <div className='main-content'>

            <Card.Group centered >
              {this.state.Teams.map((team, i) => (<TeamComponent key={i} team={this.state.Teams[i]} />))}
            </Card.Group>


          </div>
        </div>
      </div>
    )
  }
}
export default withHttpRequests(LECScreen);
