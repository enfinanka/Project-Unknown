import React, { Component } from 'react'
import { Card, Header, Image, } from 'semantic-ui-react';
import './EventScreen.css'

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

      <div className='app-wrapper'>

        <div className='app-content'>


          <Card centered fluid>
            <Image src={this.state.matches.images && this.state.matches.images.banner} />
            <Header size='large' textAlign='center'>{this.state.matches.next_series && this.state.matches.next_series.title}</Header>
            <Header sub size='huge' textAlign='center'>{this.state.matches.next_series && this.state.matches.next_series.start}</Header>
            <Card.Content>
              <Header textAlign='center' color='red'>VS</Header>
              <Card.Group centered>
                <Card>
                  <Card.Content >
                    <Image size='tiny' src={this.state.rosters[0] && this.state.rosters[0].teams[0].images.default} />
                  </Card.Content>
                  <Card.Content>
                    <Header>Score</Header>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image size='tiny' src={this.state.rosters[1] && this.state.rosters[1].teams[0].images.default} />
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
          </Card>





        </div>
      </div>

    )
  }
}
export default withHttpRequests(EventScreen);