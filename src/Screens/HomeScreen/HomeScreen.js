import React, { Fragment } from 'react'
import { Grid, Image } from 'semantic-ui-react';

import './HomeScreen.css'
import MatchCardComponent from '../../Components/MatchCard/MatchCardComponent'
import sweden from '../../assets/images/sweden.png'
import CardComponent from '../../Components/CardComponent/CardComponent';
import withHttpRequests from '../../HOCS/withHttpRequests';

function HomeScreen() {

 
 

  return (
    <Fragment>
      <p className="main-header header-margin">ONGOING EVENTS</p>
      <div className="ongoing-events-wrapper">
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <CardComponent>
                <Image className="eventImage" src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </CardComponent>
            </Grid.Column>

            <Grid.Column>
              <CardComponent>
                <Image className="eventImage" src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </CardComponent>
            </Grid.Column>

            <Grid.Column>
              <CardComponent>
                <Image className="eventImage" src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </CardComponent>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

      <p className="main-header sub-header-margin">Matches</p>
      <div className="upcoming-match-wrapper">
        <Grid>
          <Grid.Row columns={5}>

            <Grid.Column>
              <MatchCardComponent>
                <img src={sweden} className="swedenimg" alt="flag" />
                <p>VS.</p>
                <img src={sweden} className="swedenimg" alt="flag" />
                <div className="break" />
                <p style={{ fontSize: '1.5em' }}>NIP</p>
                <p style={{ fontSize: '1.5em' }}>Fnatic</p>
              </MatchCardComponent>
            </Grid.Column>

            <Grid.Column>
              <MatchCardComponent>
                <img src={sweden} className="swedenimg" alt="flag" />
                <p>VS.</p>
                <img src={sweden} className="swedenimg" alt="flag" />
                <div className="break" />
                <p style={{ fontSize: '1.5em' }}>NIP</p>
                <p style={{ fontSize: '1.5em' }}>Fnatic</p>
              </MatchCardComponent>
            </Grid.Column>

            <Grid.Column>
              <MatchCardComponent>
                <img src={sweden} className="swedenimg" alt="flag" />
                <p>VS.</p>
                <img src={sweden} className="swedenimg" alt="flag" />
                <div className="break" />
                <p style={{ fontSize: '1.5em' }}>NIP</p>
                <p style={{ fontSize: '1.5em' }}>Fnatic</p>
              </MatchCardComponent>
            </Grid.Column>

            <Grid.Column>
              <MatchCardComponent></MatchCardComponent>
            </Grid.Column>
            <Grid.Column>
              <MatchCardComponent></MatchCardComponent>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Fragment>
  )
}

export default withHttpRequests(HomeScreen);