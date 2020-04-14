import React, { Component, Fragment } from 'react'


import './TeamScreen.css'
import withHttpRequests from '../../HOCS/withHttpRequests';
import TeamComponent from '../../Components/TeamComponent/TeamComponent'
import { Card, Button } from 'semantic-ui-react';

class TeamScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Teams: [],
      clicked: true,


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



  tournamentTeamsPage2 = () => {
    this.setState({ clicked: false })
    this.props.getTeams(5, 4430, 2)
      .then(res => {
        var newArray = this.state.Teams.concat(res.data);
        this.setState({
          Teams: [...newArray]
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
        <div className='loadmore-button'>
          {this.state.clicked && <Button  inverted color='yellow' size='large' onClick={() => this.tournamentTeamsPage2()}>More Teams</Button>}
        </div>

      </Fragment>


    )
  }
}
export default withHttpRequests(TeamScreen);