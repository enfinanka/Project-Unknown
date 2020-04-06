import React, { Fragment } from 'react'

import HomeScreen from './Screens/HomeScreen/HomeScreen'
import './App.css'

export default function App() {
  return (
    <Fragment>
      <HomeScreen></HomeScreen>

      <footer>
        <h1 style={{fontFamily: 'Geometria'}}>
          Footer Here
        </h1>
      </footer>
    </Fragment>
  )
}
