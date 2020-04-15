import React, { Component, Fragment } from 'react'
import { Icon, Image, Card, Button, } from 'semantic-ui-react'

import './TeamComponent.css'
import withHttpRequests from '../../HOCs/withHttpRequest'
import SingleTeamComponent from '../SingleTeamComponent/SingleTeamComponent'

/**
 * @ render cards with info for all teams in the tournament
 */

class TeamComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Show: true,
      TeamInfo: [],
    }
  }

  getTeamInfo = () => {
    if (this.state.Show === true) {
      this.setState({ Show: false })
    } else {
      this.setState({ Show: true })
    }
    this.props.getTeam(this.props.team.id)
      .then(res => {
        this.setState({ TeamInfo: res })
      })
  }

  render() {
    const { team } = this.props;
    const { Show, TeamInfo } = this.state;
    return (
      <Fragment>
        <div className={Show ? 'card' : 'card2'}>
          {Show ?
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
            </Card>
            : <SingleTeamComponent TeamInfo={TeamInfo} />}
          <Button color='teal' fluid onClick={this.getTeamInfo}>{Show ? 'More Info' : 'Close'}</Button>
        </div>
      </Fragment>
    )
  }
}
export default withHttpRequests(TeamComponent);