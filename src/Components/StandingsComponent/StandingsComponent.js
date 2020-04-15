import React, { Component, Fragment } from 'react'
import withHttpRequests from '../../HOCs/withHttpRequest'
import TableRegularComponent from '../TableRegularComponent/TableRegularComponent'

class StandingsComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: 'regular'
    }

    this.getStandings()
  }

  getStandings = () => {
    this.props.getTest()
    .then(res => {
      console.log(res)
    })
  }

  showRegular = () => {
    if(this.state.isActive === 'playoff') {
      this.setState({isActive: 'regular'});
    }
  }

  showPlayoff = () => {
    if(this.state.isActive === 'regular') {
      this.setState({isActive: 'playoff'});
      console.log(this.state)
    }
  }

  render() {
    const { isActive } = this.state

    return (
      <Fragment>
        <button onClick={this.showRegular}>Regular Season</button>
        <button onClick={this.showPlayoff}>Play-off</button>
        
        {isActive === 'regular' && 
        <TableRegularComponent></TableRegularComponent>
        }
      </Fragment>
    )
  }
}

export default withHttpRequests(StandingsComponent)