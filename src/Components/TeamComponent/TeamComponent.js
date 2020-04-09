import React, { Component } from 'react'
import { Icon, Image, Card, } from 'semantic-ui-react'
import './TeamComponent.css'



export default class TeamComponent extends Component {
  render() {
    return (
      <Card  raised >
        <Image src={this.props.team.images.default} alt='logo' wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.team.name}</Card.Header>
          <Card.Meta>
            <span>{this.props.team.country.name}</span><Image size='mini' src={this.props.team.country.images.thumbnail} alt='flag' />
          </Card.Meta>
          <Card.Description>
            <a href={this.props.team.social_media_accounts[2] && this.props.team.social_media_accounts[2].url}><Icon link size='big' name='twitch' /></a>
            <a href={this.props.team.social_media_accounts[1] && this.props.team.social_media_accounts[1].url}><Icon link size='big' name='facebook official' /></a>
            <a href={this.props.team.social_media_accounts[0] && this.props.team.social_media_accounts[0].url}><Icon link size='big' name='twitter' /></a>
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
