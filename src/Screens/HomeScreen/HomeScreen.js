import React, { Fragment } from 'react'
import { Grid, Image } from 'semantic-ui-react';

import './HomeScreen.css'

export default function HomeScreen() {
  return (
    <Fragment>
      <p className="main-page-header">ONGOING EVENTS</p>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className=""></div>
    </Fragment>
  )
}
