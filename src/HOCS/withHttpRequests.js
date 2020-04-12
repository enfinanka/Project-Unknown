import React, { Component } from 'react';

export default function withHttpRequests(WrappedComponent, selectData) {

  return class extends Component {
    constructor(props) {
      super(props);

      this.getToken(true);

    }

    getToken = async (force) => {

      if (sessionStorage.getItem('token') && !force) return

      const key = 'TedNilsson_61cf5';
      const secret = '9802bbcf-5a86-4895-bdd1-e9348f0e5b40';

      return fetch('https://api.abiosgaming.com/v2/oauth/access_token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
       
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded' ,
        }
      }).then(res => res.json())
        .then((res) => {
          console.log('körs');
          
          sessionStorage.setItem('token', res.access_token)
          setTimeout(() => {
            sessionStorage.removeItem('token')
            this.getToken(true)
          }, res.expires_in + '000' - '300000');
        })
    }

    
      getMatches = async () => {
        const url = "https://api.abiosgaming.com/v2/tournaments/4430?&access_token=";
        // const queryString = `&page=1&access_token=`

        if (!sessionStorage.getItem('token')) await this.getToken(false);
        return fetch(`${url}` + sessionStorage.getItem('token'))
          .then(res => res.json())
      }

      getTeams = async (game, tournament, page) => {
        const url = "https://api.abiosgaming.com/v2/teams";
        const queryString = `?with[]game=${game}&tournaments[]=${tournament}&page=${page}&access_token=`

        if (!sessionStorage.getItem('token')) await this.getToken(false);
        return fetch(`${url}?${queryString}` + sessionStorage.getItem('token'))
          .then(res => res.json())

      }
    


    render() {
      return (
        <WrappedComponent
          getTeams={this.getTeams}
          getMatches={this.getMatches}
          {...this.props}
        />
      )
    }
  };
}
