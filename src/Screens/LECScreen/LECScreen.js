import React, { Component } from 'react'
<<<<<<< HEAD
import { Card, Header, Image, Button, } from 'semantic-ui-react';
=======
import { Card, Header, Image, Button } from 'semantic-ui-react';
import './LECScreen.css'
>>>>>>> ebd6e7f34b8a2d94e2e89adc8dfab38bc2519133

import TeamComponent from '../../Components/TeamComponent/TeamComponent'
import './LECScreen.css'
import withHttpRequests from '../../HOCs/withHttpRequest';
import MatchComponent from '../../Components/MatchComponent/MatchComponent';



<<<<<<< HEAD
class ESLEventScreen extends Component {
=======
class LECScreen extends Component {
>>>>>>> ebd6e7f34b8a2d94e2e89adc8dfab38bc2519133
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
<<<<<<< HEAD
      rosters: [],
      Teams: [],

=======
      rosters: []
>>>>>>> ebd6e7f34b8a2d94e2e89adc8dfab38bc2519133
    }
    this.upcomingMatches();
  }

<<<<<<< HEAD
  tournamentTeams = () => {
    this.props.getTeams(2, 4244, 1)
      .then(res => {
        this.setState({
          Teams: [...res.data]
        })

      })
  }

  upcomingMatches = async () => {
=======
  upcomingMatches = () => {
>>>>>>> ebd6e7f34b8a2d94e2e89adc8dfab38bc2519133
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
<<<<<<< HEAD
        <img alt='banner' className='background' src='https://cdn.vox-cdn.com/thumbor/WIMIk4P0X-u7GXwQb0GDLmq0NWs=/0x0:1920x1080/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/51824185/maxresdefault.0.jpg'></img>
        <div className="content-wrapper">
          <div className="content-header">
            <img alt='info banner' src={this.state.matches.images && this.state.matches.images.banner} />
          </div>
          <div className="sub-nav-links">
            <Button onClick={(() => this.tournamentTeams())}>Teams</Button>
          </div>
          <div className="main-content">
            <Header size='large' textAlign='center'>{this.state.matches.next_series && this.state.matches.next_series.title}</Header>
            <Header sub size='huge' textAlign='center'>{this.state.matches.next_series && this.state.matches.next_series.start}</Header>
            <Card.Content>
              <Header textAlign='center' color='red'>VS</Header>
              <Card.Group centered>
                <Card>
                  <Card.Content >
                    <Card.Header textAlign='center'>{this.state.rosters[0] && this.state.rosters[0].teams[0].name} <Image size='tiny' src={this.state.rosters[0] && this.state.rosters[0].teams[0].images.default} /></Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <Header>Score</Header>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Card.Header textAlign='center'>{this.state.rosters[1] && this.state.rosters[1].teams[0].name} <Image size='tiny' src={this.state.rosters[1] && this.state.rosters[1].teams[0].images.default} /></Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <Header>Score</Header>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Card.Content>
            <Card.Group centered>
              {this.state.rosters.map((team, i) => (<MatchComponent key={i} team={this.state.rosters[i]} />))}
            </Card.Group>

            <Card.Group centered >
              {this.state.Teams.map((team, i) => (<TeamComponent key={i} team={this.state.Teams[i]} />))}
            </Card.Group>

          </div>
        </div>
      </div>

    )
  }
}

export default withHttpRequests(ESLEventScreen);
=======
        <div className="content-wrapper">
          <div className="content-header">
            <img src={this.state.matches.images && this.state.matches.images.banner} />
          </div>

          <div className="sub-navbar">
            <Button size="medium" basic color='black'>Information</Button>
            <Button size="medium" basic color='black'>Teams</Button>
            <Button size="medium" basic color='black'>Standings</Button>
          </div>

          <div className="next-match-wrapper">
            <h1 style={{marginBottom: '0px'}}>Next Match</h1>
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
      </div>
    </div>
    )
  }
}
export default withHttpRequests(LECScreen);
>>>>>>> ebd6e7f34b8a2d94e2e89adc8dfab38bc2519133
