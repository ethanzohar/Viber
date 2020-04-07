import React, { Component } from 'react';
import './App.css';

const Stream = () => {

  const paramsKey = "spotify_auth_params";
  const userInfoKey = "spotify_user_info";
  const positionKey = 'window_position';

  async function getPlayer(access_token) {
    const response = await fetch('https://api.spotify.com/v1/me/player', {
      Accepts: 'application/json',
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + access_token
      }
    })
    
    try {
      console.log(await response.json());
    } catch {
      console.log("nothing is playing");
    }
  }

  var params = JSON.parse(localStorage.getItem(paramsKey));
  var userInfo = JSON.parse(localStorage.getItem(userInfoKey));
  var position = JSON.parse(localStorage.getItem(positionKey))

  console.log(params);
  console.log(userInfo);
  console.log(position);

  getPlayer(params.access_token);

  return (
    <div className="Spotify">
      <div className="container">
        <div id="login">
          <h1>This is an example of the Implicit Grant flow</h1>
        </div>
      </div>
    </div>
  );
}

export default Stream;
