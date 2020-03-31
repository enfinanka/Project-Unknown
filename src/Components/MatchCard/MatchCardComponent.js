import React from 'react'

import './MatchCardComponent.css'

export default function MatchCardComponent(props) {
  return (
    <div className="match-card-wrapper">
      {props.children}
    </div>
  )
}
