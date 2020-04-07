import React, { Component } from 'react';
import './App.css';

const SpotifyLogin = () => {

  const stateKey = 'spotify_auth_state';

  function generateRandomString(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  const buttonPress = () => {
      var client_id = '53a649e024504a91898d19070924df56'; // Your client id
      var redirect_uri = 'http://localhost:8081/spotify/login/redirect'; // Your redirect uri

      var state = generateRandomString(16);

      localStorage.setItem(stateKey, state);
      var scope = 'user-read-private user-read-email user-read-playback-state user-modify-playback-state user-read-currently-playing streaming app-remote-control user-library-modify user-library-read user-read-playback-position user-read-recently-played';

      var url = 'https://accounts.spotify.com/authorize';
      url += '?response_type=token';
      url += '&client_id=' + encodeURIComponent(client_id);
      url += '&scope=' + encodeURIComponent(scope);
      url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
      url += '&state=' + encodeURIComponent(state);

      window.location = url;
  }

  return (
    <div className="SpotifyLogin">
      <div className="container">
        <div id="login">
          <h1>This is an example of the Implicit Grant flow</h1>
          <button id="login-button" className="btn btn-primary" onClick={buttonPress}>Log in with Spotify</button>
        </div>
      </div>
    </div>
  );
}

export default SpotifyLogin;
