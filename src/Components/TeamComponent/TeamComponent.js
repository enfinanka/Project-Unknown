import React, { Component } from 'react'
import { Icon, Image, Card, } from 'semantic-ui-react'
import './TeamComponent.css'



export default class TeamComponent extends Component {
  render() {
    return (
      <Card raised >
        <Card.Content>
          <Card.Header>{this.props.team.name}<Image className='logo' size='tiny' src={this.props.team.images.default} alt='logo' /></Card.Header>
        </Card.Content>
        <Card.Content>
          
            <p>{this.props.team.country.name}<Image spaced='left' size='mini' src={this.props.team.country.images.thumbnail} alt='flag' /></p>
         
        </Card.Content>
        <Card.Content>
          <Card.Description>
            <p>Social Media</p>
            <a href={this.props.team.social_media_accounts[2] && this.props.team.social_media_accounts[2].url}><Icon link size='big' name='twitch' /></a>
            <a href={this.props.team.social_media_accounts[1] && this.props.team.social_media_accounts[1].url}><Icon link size='big' name='facebook official' /></a>
            <a href={this.props.team.social_media_accounts[0] && this.props.team.social_media_accounts[0].url}><Icon link size='big' name='twitter' /></a>
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
