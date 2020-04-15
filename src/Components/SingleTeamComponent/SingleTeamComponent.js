import React, { useState, useEffect } from 'react'
import { Image, Card, } from 'semantic-ui-react'

import './SingleTeamComponent.css'
import PlayerComponent from '../PlayerComponent/PlayerComponent';

export default function SingleTeamComponent(props) {

  const { TeamInfo } = props;
  const [playerInfo, setplayerInfo] = useState([]);

  useEffect(() => {
    setplayerInfo(TeamInfo.players)
  }, [TeamInfo.players])

  return (
    <Card raised fluid>
      <Card.Content>
        <Card.Header>{TeamInfo.name}<Image className='logo' size='tiny' src={TeamInfo.images && TeamInfo.images.default} alt='logo' /></Card.Header>
        <Card.Meta>{TeamInfo.short_name}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>{TeamInfo.country && TeamInfo.country.name}<Image spaced='left' size='mini' src={TeamInfo.country && TeamInfo.country.images.thumbnail} alt='flag' /></p>
      </Card.Content>
      <Card.Content>
        <Card.Group centered>
          {playerInfo && playerInfo.map((player, i) => (<PlayerComponent key={i} playerInfo={playerInfo[i]} />))}
        </Card.Group>
      </Card.Content>
    </Card>
  )

}
