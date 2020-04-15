import React from 'react'

import './TablePositionComponent.css'

export default function TablePositionComponent(props) {
  const { placing, teamname } = props
  return (
    <div className="single-team">
      <h2>{placing}</h2>
      <h2>{teamname}</h2>
    </div>
  )
}
