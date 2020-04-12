import React, { Component } from 'react'
import { Card, } from 'semantic-ui-react';

export default class MatchComponent extends Component {
  render() {
    console.log(this.props.team);
    return (
      <Card>

        <Card.Content>
          <Card.Header textAlign='center'>{this.props.team.teams[0].name}</Card.Header>
          <Card.Description textAlign='center'>
            <span >{this.props.team.players[0].nick_name}</span><br/>
            <span >{this.props.team.players[1].nick_name}</span><br/>
            <span >{this.props.team.players[2].nick_name}</span><br/>
            <span >{this.props.team.players[3].nick_name}</span><br/>
            <span >{this.props.team.players[4].nick_name}</span><br/>
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

