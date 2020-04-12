import React, { Component } from 'react'


import withHttpRequests from '../../HOCS/withHttpRequests';
import TeamComponent from '../../Components/TeamComponent/TeamComponent'
import { Card } from 'semantic-ui-react';

class TeamScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Teams: [],
    }

 this.tournamentTeams()


  }

 

 

  tournamentTeams = async () => {
    this.props.getTeams(5, 4430, 1)
      .then(res => {
        console.log('körs3');
        
        this.setState({
          Teams: [...res.data]
        })
       
      })
    
  }

  render() {


    return (

      <Card.Group centered >
        {this.state.Teams.map((team, i) => (<TeamComponent key={i} team={this.state.Teams[i]} />))}
      </Card.Group>



    )
  }
}
export default withHttpRequests(TeamScreen);