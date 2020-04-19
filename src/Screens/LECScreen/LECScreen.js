import React, { Component } from 'react'
import { Card, Header, Image, Button, Icon } from 'semantic-ui-react';

import './LECScreen.css'
import lecInfoImage from '../../assets/images/lecinfoimage.png';
import TeamComponent from '../../Components/TeamComponent/TeamComponent'
import withHttpRequests from '../../HOCs/withHttpRequest';
import StandingsComponent from '../../Components/StandingsComponent/StandingsComponent'
import LecInfoComponent from '../../Components/LecInfoComponent/LecInfoComponent';
/**
 * @description screen that render all components for LEC 2020 Spring for League of Legends
 * @author Ted, Joel, Elin
 */
class LECScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
      rosters: [],
      Teams: [],
      description: '',
      activePage: 'Information'
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
    this.props.getTournaments(4244)
      .then(res => {
        this.setState({ matches: res })
        this.setState({ rosters: res.next_series.rosters })
        this.setState({ description: res.description.replace(/(<([^>]+)>)/ig, "") })
      })
  }

  changeContent = (e) => {
    switch (e.target.id) {
      case '1':
        this.setState({ activePage: 'Information' })
        break;
      case '2':
        this.setState({ activePage: 'Teams' })
        this.tournamentTeams();
        break;
      case '3':
        this.setState({ activePage: 'Standings' })
        break;
      default:
        break;
    }
  }
  render() {
    const { matches, rosters, activePage, Teams, description } = this.state
    return (
      <div className="lec-screen-wrapper">
        {<img className='background-picture' alt='bg-colored' src='https://cdn.shopify.com/s/files/1/0070/6661/5861/files/Featured_product_backgroud_image_1800x.jpg?v=1552502823' />}
        <div className="content-wrapper">
          <div className="content-header">
            <img src={matches.images && matches.images.banner} alt="banner" />
          </div>
          <div className="sub-navbar">
            <Button size="medium" id="1" color='black' onClick={this.changeContent}>Information</Button>
            <Button size="medium" id="2" color='black' onClick={this.changeContent}>Teams</Button>
            <Button size="medium" id="3" color='black' onClick={this.changeContent}>Standings</Button>
          </div>

          <div className="next-match-wrapper">
            <h1 style={{ marginBottom: '0px' }}>Next Match</h1>
            <Header sub size='huge' textAlign='center'>
              {matches.next_series && matches.next_series.start}
            </Header>

            <Card>
              <Card.Content>
                <Header textAlign='center'>
                  {rosters[0] && rosters[1].teams[0].short_name}
                  <Image spaced="right" size='massive' src={rosters[1] && this.state.rosters[1].teams[0].images.default} />
                  VS
                <Image spaced="left" size='massive' src={rosters[0] && rosters[0].teams[0].images.default} />
                  {rosters[0] && rosters[0].teams[0].short_name}
                </Header>
              </Card.Content>
            </Card>
          </div>

          <div className="main-content">
            <LecInfoComponent />
            {activePage === 'Standings' && 
              <StandingsComponent rosters={rosters}/>
            }
            {activePage === 'Teams' &&
              <Card.Group centered >
                {Teams.map((team, i) => (<TeamComponent key={i} team={Teams[i]} />))}
              </Card.Group>}
            {activePage === 'Information' && 
            <div>
              <img src={lecInfoImage} className="ui large rounded image" alt="lecinfo" />
              <div className="info">
                <Icon className="info-icon" size="large" inverted color='black' name='map marker alternate' />
                <p className="tournament-ptag">{this.state.matches.country && this.state.matches.country.name}</p>
                <p className="space-api">, </p>
                <p className="tournament-ptag">{this.state.matches.city}</p>
                <Icon className="infoIcon" size="large" inverted color='black' name='users' />
                <p className="tournament-ptag">{this.state.matches.game && this.state.matches.game.default_lineup_size}</p>
                <p className="space-api-vs">VS</p>
                <p className="tournament-ptag">{this.state.matches.game && this.state.matches.game.default_lineup_size}</p>
              </div>
              {this.state.description}
            </div>}
          </div>
        </div>
      </div>
    )
  }
}
export default withHttpRequests(LECScreen);
