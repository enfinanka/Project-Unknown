import React, { Component } from 'react';

/**
 * 
 * @description handeling all request from the abios api
 * @function getToken fetches the access token and put it in sessionStorage, when the the token is fetch a timeout will check remaning 
 * time on the token and fetch a new token before the time runs out. This dont work perfect because  the timeout will stop if you change 
 * screen. So i have to fetch a token every time a request is made.
 * @author Joel
 */

export default function withHttpRequests(WrappedComponent) {
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
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      }).then(res => res.json())
        .then((res) => {
          sessionStorage.setItem('token', res.access_token)
          setTimeout(() => {
            sessionStorage.removeItem('token')
            this.getToken(true)
          }, res.expires_in + '000' - '300000');
        })
    }

    getTeam = async (id) => {
      const url = "https://api.abiosgaming.com/v2/teams/";
      const queryString = `${id}?&page=1&access_token=`

      if (!sessionStorage.getItem('token')) await this.getToken(false);
      return fetch(`${url}${queryString}` + sessionStorage.getItem('token'))
        .then(res => res.json())
    }

    getTournaments = async (id) => {
      const url = "https://api.abiosgaming.com/v2/tournaments/";
      const queryString = `${id}?&page=1&access_token=`

      if (!sessionStorage.getItem('token')) await this.getToken(false);
      return fetch(`${url}${queryString}` + sessionStorage.getItem('token'))
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
          getTournaments={this.getTournaments}
          getTeam={this.getTeam}
          {...this.props}
        />
      )
    }
  };
}
