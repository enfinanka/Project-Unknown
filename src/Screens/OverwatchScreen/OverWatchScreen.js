import React, { Component, Fragment } from 'react';
import { Grid, Image } from 'semantic-ui-react'


export default class OverWatchScreen extends Component {
  render() {
    return (

      <Fragment>
        <p className="main-header header-margin">OverWatch</p>
        <div className="ongoing-events-wrapper">
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
        </div>

        <p className="main-header sub-header-margin">Matches</p>
        <div className="upcoming-match-wrapper">
          <Grid>
            <Grid.Row columns={5}>
              <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </Grid.Column>
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

            <Grid.Row columns={5}>
              <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </Grid.Column>
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
        </div>
      </Fragment>
    )
  }
}
