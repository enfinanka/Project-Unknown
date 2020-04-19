import React, { Fragment, Component } from 'react'
import { Button } from 'semantic-ui-react';
import { Link } from "react-router-dom"

import './EventComponent.css'

/**
 * @desc Renders one of the two big images appearing on the home screen. Takes in props such as top position and left position from
 * Home Screen.
 * @author Ted
 */

export default class EventComponent extends Component {
  constructor(props) {
    super(props)

    const { topPosition, leftPosition } = this.props

    this.state = {
      btnStyles: {
        top: topPosition,
        left: leftPosition
      },
    }
  }

  
  render() {
    const { linkUrl, children } = this.props
    
    return (
    <Fragment>
      {children}
      <Link to={linkUrl}>
        <Button size="huge" inverted color={this.props.btnColor} className="readmore-button" style={this.state.btnStyles} >
          Read More
        </Button>
      </Link>
    </Fragment>
    )
  }
}