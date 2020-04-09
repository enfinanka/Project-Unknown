import React, { Component, Fragment } from 'react'


import withHttpRequests from '../../HOCS/withHttpRequests';
import TeamComponent from '../../Components/TeamComponent/TeamComponent'
import { Card } from 'semantic-ui-react';

class TeamScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Teams: [],
      page: 1,
    }

    this.tournamentTeams();
  }

  

  tournamentTeams = () => {
    this.props.getTeams(5, 4430, this.state.page)
      .then(res => {
        this.setState({
          Teams: [...res.data]
        })
       
      })
  }

  teams2=()=>{
    this.setState({page:2})
    this.tournamentTeams();


  }
  render() {
console.log(this.state.page);

    return (
      <Fragment>
        <Card.Group centered >
          {this.state.Teams.map((team, i) => (<TeamComponent key={i} team={this.state.Teams[i]} />))}
        </Card.Group>
      <button onClick={() =>  this.teams2() }>hej</button>

      </Fragment>

    )
  }
}
export default withHttpRequests(TeamScreen);