import React, { Component, Fragment } from 'react'
import {  Icon,  Image, } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';

export default class NavBar extends Component {



  render() {
    return (
      <Fragment>
         {this.props.visible === false ?
          <div className="app-header"><h1 className='nav-header'>GHOST GAMING</h1><Image className='ghost' src='https://i.pinimg.com/originals/e3/42/4d/e3424d9c598ee9697ba7b2cad54e4842.png' />
            <div className='menu-icon' onClick={() => this.props.setVisible(true) & window.scrollTo(0, 0)} >
              <h3 >MENU <Icon link name='bars' /></h3> </div></div>
          : <div className='navbar-close'></div>}
      </Fragment>

    )
  }
}