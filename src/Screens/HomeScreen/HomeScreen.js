import React, { Fragment } from 'react'
import { Grid, Image } from 'semantic-ui-react';

import './HomeScreen.css'
import withHttpRequests from '../../HOCS/withHttpRequests';

function HomeScreen() {




  return (
    <div className="app-wrapper">
      <div className="app-content">
        <Fragment>
          <p className="main-header header-margin">ONGOING EVENTS</p>
          <div className="ongoing-events-wrapper">
            <Grid>
              <Grid.Row columns={3}>
                <Grid.Column>
                
                </Grid.Column>

                <Grid.Column>
                 
                </Grid.Column>

                <Grid.Column>
                 
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>

          <p className="main-header sub-header-margin">Matches</p>
          <div className="upcoming-match-wrapper">
            <Grid>
              <Grid.Row columns={5}>

                <Grid.Column>
                
                </Grid.Column>

                <Grid.Column>
                
                </Grid.Column>

                <Grid.Column>
                 
                </Grid.Column>

                <Grid.Column>
                
                </Grid.Column>
                <Grid.Column>
                 
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Fragment>
      </div>
    </div>
  )
}

export default withHttpRequests(HomeScreen);