import React, { Fragment, Component } from 'react'

import './TableRegularComponent.css'
import TablePositionComponent from '../TablePositionComponent/TablePositionComponent'

export default class TableRegularComponent extends Component {
  
  renderPosition = () => {

  }
  render() {
    return (
      <Fragment>
        <div className="regular-season-table">
          <TablePositionComponent placing={1} teamname={'G2 Esports'} />
          <TablePositionComponent placing={2} teamname={'Fnatic'} />
          <TablePositionComponent placing={3} teamname={'Origen'} />
          <TablePositionComponent placing={4} teamname={'MAD Lions'} />
          <TablePositionComponent placing={5} teamname={'G2 Esports'} />
          <TablePositionComponent placing={6} />
          <TablePositionComponent placing={7} />
          <TablePositionComponent placing={8} />
          <TablePositionComponent placing={9} />
          <TablePositionComponent placing={10} />
        </div>
      </Fragment>
    )
  }
}
