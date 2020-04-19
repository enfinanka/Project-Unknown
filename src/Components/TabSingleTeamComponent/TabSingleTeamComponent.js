import React from 'react'

import './TabSingleTeamComponent.css'

/**
 * @desc Single team tab used in the standings table. 
 * @author Ted
 */

export default function TablePositionComponent(props) {
  const { placing, teamname, winratio, logo } = props
  
  return (
    <div className="single-team">
      <div className="placing-logo-group">
        <h2>{placing}</h2>
        <img src={logo} alt="logo" className="standings-logos"/>
      </div>

      <div className="name-wins-group">
        <h2>{teamname}</h2>
        <h3>{winratio}</h3>
      </div>
    </div>
  )
}
