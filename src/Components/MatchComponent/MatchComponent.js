import React, { Component } from 'react'
import { Card, Image, } from 'semantic-ui-react';
import './MatchComponent.css'

export default class MatchComponent extends Component {
  render() {
    
    return (
      <Card>
        <Card.Content >
          <Card.Header textAlign='center'>{this.props.team.teams[0].name}<Image spaced='left' src={this.props.team.teams[0].images.thumbnail} alt='flag' /></Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description >
            <p><Image size='mini' spaced='right' src={this.props.team.players[0].country.images.thumbnail} alt='flag' />{this.props.team.players[0].nick_name}</p>
            <p><Image size='mini' spaced='right' src={this.props.team.players[1].country.images.thumbnail} alt='flag' />{this.props.team.players[1].nick_name}</p>
            <p><Image size='mini' spaced='right' src={this.props.team.players[2].country.images.thumbnail} alt='flag' />{this.props.team.players[2].nick_name}</p>
            <p><Image size='mini' spaced='right' src={this.props.team.players[3].country.images.thumbnail} alt='flag' />{this.props.team.players[3].nick_name}</p>
            <p><Image size='mini' spaced='right' src={this.props.team.players[4].country.images.thumbnail} alt='flag' />{this.props.team.players[4].nick_name}</p>
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

