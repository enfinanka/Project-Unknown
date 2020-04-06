import React, { Component } from 'react';

export default function withHttpRequests(WrappedComponent, selectData) {

  return class extends Component {
    constructor(props) {
      super(props);

      this.getToken();
    }

    getToken = async (force = false) => {

      if (sessionStorage.getItem('token') && !force) return

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
          sessionStorage.setItem('token', res.access_token)
          setTimeout(() => {
            this.getToken(true)
          }, 350000);
        })
    }

    getData = async (endpoint, dataCallBack) => {

      const accessUrl = '&access_token='

      if (!sessionStorage.getItem('token')) await this.getToken(false);
      return fetch("https://api.abiosgaming.com/v2/" + endpoint + accessUrl + sessionStorage.getItem('token'))
        .then(res => res.json())
        .then(data => dataCallBack(data))
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
