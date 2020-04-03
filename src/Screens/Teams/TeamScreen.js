import React, { Component } from 'react'

import withHttpRequests from '../../HOCS/withHttpRequests';

class TeamScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {}

   this.testdata()
  
    
    
  }
 

  testdata = () => {
    let endpoint = 'games?'
    this.props.getData(endpoint)
    .then((result) => {
      console.log(result);
      

    })

    
    
    
   
    
    
    
    
    
   
    
   


  }


  render() {
    
    return (
      <div>

      </div>
    )
  }
}
export default withHttpRequests(TeamScreen);