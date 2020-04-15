import React, { Component, Fragment } from 'react'
import withHttpRequests from '../../HOCs/withHttpRequest'
import TableRegularComponent from '../TableRegularComponent/TableRegularComponent'

import './StandingsComponent.css'
import TablePlayoffComponent from '../TablePlayoffComponent/TablePlayoffComponent'

class StandingsComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: 'regular'
    }
  }

  showRegular = () => {
    if(this.state.isActive === 'playoff') {
      this.setState({isActive: 'regular'});
    }
  }

  showPlayoff = () => {
    if(this.state.isActive === 'regular') {
      this.setState({isActive: 'playoff'});
    }
  }

  render() {
    const { isActive } = this.state

    return (
      <Fragment>
        <div className="standings-btn-group">
        <button onClick={this.showRegular}>Regular Season</button>
        <button onClick={this.showPlayoff}>Play-off</button>
        </div>
        {isActive === 'regular' && 
        <TableRegularComponent />
        }
        {isActive === 'playoff' &&
        <TablePlayoffComponent />
        }
      </Fragment>
    )
  }
}

export default withHttpRequests(StandingsComponent)