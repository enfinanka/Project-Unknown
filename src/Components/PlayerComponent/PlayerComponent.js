import React, {  } from 'react'
import { Card, Feed, Header, Image } from 'semantic-ui-react'


export default function PlayerComponent(props) {
  const { playerInfo } = props;

  console.log(playerInfo);

  return (
    <Card>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Image size='tiny' spaced='right' rounded src={playerInfo.images.default} />
            <Feed.Content>
              <Header>{playerInfo.nick_name}<Image spaced='left' size='tiny' src={playerInfo.country.images.thumbnail} /></Header>
              <Card.Meta>{playerInfo.first_name}{' '}{playerInfo.last_name}</Card.Meta>
              <Feed.Summary>
                <p>Roles: {playerInfo.roles[0]&&playerInfo.roles[0].name}</p>
                <p>From: {playerInfo.roles[0]&&playerInfo.roles[0].from}</p>
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Card.Content>
    </Card>






  )
}
