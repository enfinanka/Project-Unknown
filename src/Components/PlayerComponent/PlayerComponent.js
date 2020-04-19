import React from 'react'
import { Card, Feed, Header, Image, Icon } from 'semantic-ui-react'

/**
 * 
 * @description render all players and specific info in singelteamComponent
 * @author Joel
 */

export default function PlayerComponent(props) {
  const { playerInfo } = props;
  return (
    <Card>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Image size='tiny' spaced='right' rounded src={playerInfo.images.default} />
            <Feed.Content>
              <Header>{playerInfo.nick_name}<Image spaced='left' size='tiny' src={playerInfo.country.images.thumbnail} /></Header>
              <Card.Meta>{playerInfo.first_name}{' '}{playerInfo.last_name} <a href={playerInfo.social_media_accounts[1]
                && playerInfo.social_media_accounts[1].url}><Icon spaced='left' size='big' name='twitch' /></a></Card.Meta>
              <Feed.Summary>
                <p>Roles: {playerInfo.roles[0] && playerInfo.roles[0].name}</p>
                <p>Since: {playerInfo.roles[0] && playerInfo.roles[0].from}</p>
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Card.Content>
    </Card>
  )
}
