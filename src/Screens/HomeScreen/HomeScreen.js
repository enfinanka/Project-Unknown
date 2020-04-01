import React, { Fragment, useEffect } from 'react'
import { Grid, Image } from 'semantic-ui-react';

import './HomeScreen.css'
import MatchCardComponent from '../../Components/MatchCard/MatchCardComponent'
import sweden from '../../assets/images/sweden.png'

export default function HomeScreen() {




  const getToken = () => {
    var qs = require("querystring");
    var http = require("https");

    var options = {
      "method": "POST",
      "hostname": "api.abiosgaming.com",
      "port": null,
      "path": "/v2/oauth/access_token",
      "headers": {
        "content-type": "application/x-www-form-urlencoded"
      }
    };

    var req = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });
    });

    req.write(qs.stringify({
      grant_type: 'client_credentials',
      client_id: 'TedNilsson_61cf5',
      client_secret: '9802bbcf-5a86-4895-bdd1-e9348f0e5b40'
    }));
    req.end();
  }



  // useEffect(() => {
  //   getToken()

   

  //   fetch("https://api.abiosgaming.com/v2/tournaments?&access_token=13430d208c3f74026a3b858af0a739ef1bfbd77c80b332948fdc320205b27efe")
  //   .then(res => res.json())
  //   .then((result) => {console.log(result);
  //   })

  // })


  return (
    <Fragment>
      <p className="main-header header-margin">ONGOING EVENTS</p>
      <div className="ongoing-events-wrapper">
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

      <p className="main-header sub-header-margin">Matches</p>
      <div className="upcoming-match-wrapper">
        <Grid>
          <Grid.Row columns={5}>

            <Grid.Column>
              <MatchCardComponent>
                <img src={sweden} className="swedenimg" alt="flag" />
                <p>VS.</p>
                <img src={sweden} className="swedenimg" alt="flag" />
                <div className="break" />
                <p style={{ fontSize: '1.5em' }}>NIP</p>
                <p style={{ fontSize: '1.5em' }}>Fnatic</p>
              </MatchCardComponent>
            </Grid.Column>

            <Grid.Column>
              <MatchCardComponent>
                <img src={sweden} className="swedenimg" alt="flag" />
                <p>VS.</p>
                <img src={sweden} className="swedenimg" alt="flag" />
                <div className="break" />
                <p style={{ fontSize: '1.5em' }}>NIP</p>
                <p style={{ fontSize: '1.5em' }}>Fnatic</p>
              </MatchCardComponent>
            </Grid.Column>

            <Grid.Column>
              <MatchCardComponent>
                <img src={sweden} className="swedenimg" alt="flag" />
                <p>VS.</p>
                <img src={sweden} className="swedenimg" alt="flag" />
                <div className="break" />
                <p style={{ fontSize: '1.5em' }}>NIP</p>
                <p style={{ fontSize: '1.5em' }}>Fnatic</p>
              </MatchCardComponent>
            </Grid.Column>

            <Grid.Column>
              <MatchCardComponent></MatchCardComponent>
            </Grid.Column>
            <Grid.Column>
              <MatchCardComponent></MatchCardComponent>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Fragment>
  )
}
