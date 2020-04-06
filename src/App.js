import React, { Fragment } from 'react'

import HomeScreen from './Screens/HomeScreen/HomeScreen'
import './App.css'

export default function App() {
  return (
    <Fragment>
      <h1 className="ghost-heading" style={{fontFamily: 'Geometria'}}>Ghost Gaming</h1>
      <HomeScreen></HomeScreen>

      <footer>
        <h1 style={{fontFamily: 'Geometria'}}>
          GhostGaming
        </h1>
      </footer>
    </Fragment>
  )
}
