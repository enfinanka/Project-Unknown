import React, { Component } from 'react';


export default function withHttpRequests(WrappedComponent, selectData) {

  return class extends Component {
    constructor(props) {
      super(props);
      this.getToken();
      this.state = {
        token: '',
      }


    }

    getToken = () => {

      const key = 'TedNilsson_61cf5';
      const secret = '9802bbcf-5a86-4895-bdd1-e9348f0e5b40';

      return fetch('https://api.abiosgaming.com/v2/oauth/access_token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => res.json())
        .then((res) => {
          this.setState({ token: res.access_token })



        })


    }



    getData = async (endpoint) => {

      const accessUrl = '&access_token='
      if (!this.state.token) await this.getToken();
      return fetch("https://api.abiosgaming.com/v2/" + endpoint + accessUrl + this.state.token)
        .then(res => res.json())
        
    }





    render() {


      return (
        <WrappedComponent
          getData={this.getData}
          {...this.props}
        />
      )
    }
  };
}
