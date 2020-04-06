import React, { Fragment, Component } from 'react'
import { Button } from 'semantic-ui-react';

import './EventComponent.css'

export default class EventComponent extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)

    this.state = {
      styles: {
        top: this.props.top,
        left: this.props.left
      }
    }
  }
  
  render() {
    return (
    <Fragment>
        {this.props.children}
        <Button inverted color='yellow' className="readmore-button" style={this.state.styles}>
          Read More
        </Button>
    </Fragment>
    )
  }
}
