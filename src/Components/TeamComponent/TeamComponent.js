import React, { Component, Fragment } from 'react'
import { Icon, Image, Card, Button, } from 'semantic-ui-react'

import './TeamComponent.css'
import withHttpRequests from '../../HOCs/withHttpRequest'
import SingleTeamComponent from '../SingleTeamComponent/SingleTeamComponent'



class TeamComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Show: true,
      TeamInfo: [],
    }
  }

  getTeamInfo = () => {
    this.setState({ Show: false })

    this.props.getTeam(this.props.team.id)
      .then(res => {
        this.setState({ TeamInfo: res })
        

      })

  }


  render() {

    const { team } = this.props;
    return (
      <Fragment>
        {this.state.Show ?
          <Card raised>
            <Card.Content>
              <Card.Header>{team.name}<Image className='logo' size='tiny' src={team.images.default} alt='logo' /></Card.Header>
              <Card.Meta>{team.short_name}</Card.Meta>
            </Card.Content>
            <Card.Content>
              <p>{team.country.name}<Image spaced='left' size='mini' src={team.country.images.thumbnail} alt='flag' /></p>
            </Card.Content>
            <Card.Content>
              <Card.Description>
                <p>Social Media</p>
                <a href={team.social_media_accounts[2] && team.social_media_accounts[2].url}><Icon link size='big' name='twitch' /></a>
                <a href={team.social_media_accounts[1] && team.social_media_accounts[1].url}><Icon link size='big' name='facebook official' /></a>
                <a href={team.social_media_accounts[0] && team.social_media_accounts[0].url}><Icon link size='big' name='twitter' /></a>
              </Card.Description>
            </Card.Content>
            <Button onClick={this.getTeamInfo}>More Info</Button>
          </Card>
          : <SingleTeamComponent TeamInfo={this.state.TeamInfo} />}

      </Fragment>


    )
  }
}
export default withHttpRequests(TeamComponent);